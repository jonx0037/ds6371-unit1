# Load required libraries
library(tidyverse)
library(ggplot2)

# Create the dataset
SMU <- c(34, 200, 23, 50, 60, 50, 0, 0, 30, 89, 0, 300, 400, 20, 10, 0)
Seattle <- c(20, 10, 5, 0, 30, 50, 0, 100, 110, 0, 40, 10, 3, 0)

# Create a data frame in long format for ggplot
cash_data <- data.frame(
  amount = c(SMU, Seattle),
  school = factor(c(rep("SMU", length(SMU)), rep("Seattle", length(Seattle))))
)

# Basic summary statistics
summary_stats <- cash_data %>%
  group_by(school) %>%
  summarise(
    n = n(),
    mean = mean(amount),
    sd = sd(amount),
    min = min(amount),
    max = max(amount)
  )

print("Summary Statistics:")
print(summary_stats)

# Create histograms using base R
par(mfrow = c(1,2))
hist(SMU, 
     main = "Distribution of Cash Amounts - SMU",
     xlab = "Amount ($)",
     col = "lightblue",
     breaks = seq(0, max(SMU) + 50, by = 50))
hist(Seattle,
     main = "Distribution of Cash Amounts - Seattle",
     xlab = "Amount ($)",
     col = "lightgreen",
     breaks = seq(0, max(Seattle) + 50, by = 50))

# Reset plotting parameters
par(mfrow = c(1,1))

# Create more sophisticated histogram using ggplot2
ggplot_hist <- ggplot(cash_data, aes(x = amount, fill = school)) +
  geom_histogram(position = "identity", alpha = 0.5, bins = 10) +
  labs(title = "Distribution of Cash Amounts by School",
       x = "Amount ($)",
       y = "Count") +
  theme_minimal() +
  scale_fill_manual(values = c("SMU" = "lightblue", "Seattle" = "lightgreen"))

print(ggplot_hist)

# Perform traditional t-test for comparison
t_test_result <- t.test(amount ~ school, data = cash_data)
print("\nt-test Results:")
print(t_test_result)

# Permutation test function
run_permutation_test <- function(data, n_perm = 10000) {
  # Calculate observed difference in means
  obs_diff <- mean(data$amount[data$school == "SMU"]) - 
              mean(data$amount[data$school == "Seattle"])
  
  # Store differences from permutations
  perm_diffs <- numeric(n_perm)
  
  # Run permutations
  for(i in 1:n_perm) {
    # Randomly permute school labels
    perm_schools <- sample(data$school)
    # Calculate and store difference in means
    perm_diffs[i] <- mean(data$amount[perm_schools == "SMU"]) - 
                     mean(data$amount[perm_schools == "Seattle"])
  }
  
  # Calculate two-sided p-value
  p_value <- mean(abs(perm_diffs) >= abs(obs_diff))
  
  # Create histogram of permuted differences
  hist(perm_diffs, 
       main = "Distribution of Permuted Differences in Means",
       xlab = "Difference in Means",
       col = "lightgray")
  abline(v = obs_diff, col = "red", lwd = 2)
  
  # Return results
  return(list(
    observed_diff = obs_diff,
    p_value = p_value,
    permuted_diffs = perm_diffs
  ))
}

# Run permutation test
set.seed(123) # for reproducibility
perm_results <- run_permutation_test(cash_data)

print("\nPermutation Test Results:")
print(paste("Observed Difference in Means:", round(perm_results$observed_diff, 2)))
print(paste("P-value:", round(perm_results$p_value, 4)))

# Create a more sophisticated visualization of the permutation test results using ggplot2
perm_plot_data <- data.frame(diff = perm_results$permuted_diffs)

ggplot_perm <- ggplot(perm_plot_data, aes(x = diff)) +
  geom_histogram(fill = "lightgray", color = "black", bins = 30) +
  geom_vline(xintercept = perm_results$observed_diff, 
             color = "red", size = 1) +
  labs(title = "Distribution of Permuted Differences in Means",
       x = "Difference in Means ($)",
       y = "Count") +
  theme_minimal()

print(ggplot_perm)

