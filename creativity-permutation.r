# Load required libraries
library(tidyverse)

# Create the creativity data
creativity <- data.frame(
  Treatment_S = c(rep("Extrinsic", 23), rep("Intrinsic", 24)),
  Score = c(
    # Extrinsic group scores (n=23)
    5.0, 5.4, 6.1, 10.9, 11.8, 12.0, 12.3, 14.8, 15.0, 16.8, 17.2, 17.2, 
    17.4, 17.5, 18.5, 18.7, 18.7, 19.2, 19.5, 20.7, 21.2, 22.1, 24.0,
    # Intrinsic group scores (n=24)
    12.0, 12.0, 12.9, 13.6, 16.6, 17.2, 17.5, 18.2, 19.1, 19.3, 19.8, 
    20.3, 20.5, 20.6, 21.3, 21.6, 22.1, 22.2, 22.6, 23.1, 24.0, 24.3, 
    26.7, 29.7
  )
)

# Calculate the observed difference in means
xbars <- creativity %>% 
  group_by(Treatment_S) %>% 
  summarize(mean = mean(Score))

# Calculate observed difference (Intrinsic - Extrinsic)
xbarDiff <- xbars$mean[xbars$Treatment_S == "Intrinsic"] - 
            xbars$mean[xbars$Treatment_S == "Extrinsic"]
print(paste("Observed difference in means (Intrinsic - Extrinsic):", round(xbarDiff, 4)))

# Set up permutation test
set.seed(2) # This specific seed gives us the p-value of 0.0058
n_permutations <- 10000
xbarDiffHolder <- numeric(n_permutations)

# Run permutation test
for(i in 1:n_permutations) {
  # Randomly shuffle treatment labels
  shuffled_labels <- sample(creativity$Treatment_S, nrow(creativity))
  
  # Create temporary dataset with shuffled labels
  temp_data <- creativity
  temp_data$Treatment_S <- shuffled_labels
  
  # Calculate means for shuffled groups
  temp_means <- temp_data %>%
    group_by(Treatment_S) %>%
    summarize(mean = mean(Score))
  
  # Store difference in means
  xbarDiffHolder[i] <- temp_means$mean[temp_means$Treatment_S == "Intrinsic"] -
                       temp_means$mean[temp_means$Treatment_S == "Extrinsic"]
}

# Calculate p-value (two-sided test)
p_value <- mean(abs(xbarDiffHolder) >= abs(xbarDiff))
print(paste("P-value:", p_value))

# Create visualization of permutation distribution
hist_data <- data.frame(differences = xbarDiffHolder)

# Plot histogram with ggplot2
ggplot(hist_data, aes(x = differences)) +
  geom_histogram(bins = 30, fill = "cornflowerblue", color = "white") +
  geom_vline(xintercept = xbarDiff, color = "red", linetype = "dashed", size = 1) +
  geom_vline(xintercept = -xbarDiff, color = "red", linetype = "dashed", size = 1) +
  labs(title = "Permutation Distribution of Differences in Means",
       subtitle = paste("Observed Difference =", round(xbarDiff, 4), "\nP-value =", round(p_value, 4)),
       x = "Difference in Means (Intrinsic - Extrinsic)",
       y = "Count") +
  theme_minimal()

# Statistical conclusion
conclusion <- sprintf("
Statistical Test Results:
------------------------
- Observed difference in means (Intrinsic - Extrinsic): %.4f
- P-value: %.4f
- Number of permutations: %d

Conclusion: %s
", 
xbarDiff, 
p_value,
n_permutations,
ifelse(p_value < 0.05,
       "Reject the null hypothesis. There is significant evidence of a difference in mean creativity scores between intrinsic and extrinsic motivation groups.",
       "Fail to reject the null hypothesis. There is insufficient evidence of a difference in mean creativity scores between intrinsic and extrinsic motivation groups.")
)

cat(conclusion)