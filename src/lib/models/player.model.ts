export enum Role {
  CARRY = 'Carry',
  MID = 'Mid',
  OFFLANE = 'Offlane',
  SOFT_SUPPORT = 'Soft Support',
  HARD_SUPPORT = 'Hard Support'
};

export interface Player {
  id: string;
  name?: string;
  nationality?: string;
};

export interface Competitor extends Player {
  /** Player's alternative ID (if any) */
  altId?: string;
  /** Player's preferred role */
  role: `${Role}`;
  /** Raw skill rating (0-100), how strong a player is */
  skill: number;
  /** 
   * Stability rating (0-1), how consistent a player is.
   * Higher values indicate more consistent performance.
   * Used to determine the performance of a player in a game.
   * Calculated as follows: 
   *  - Determine variance range: [min: 1-(1-stab)), max: 1+(1-stab)]
   *  - Roll a random number within the variance range
   *  - Multiply skill by the rolled value
   * 
   * Example:
   *  - Skill: 80
   *  - Stability: 0.5
   *  - Variance range: [min: 1-(1-0.5)), max: 1+(1-0.5)] => [0.5, 1.5]
   *  - Rolled value: 0.75
   *  - Final performance: 80 * 0.75 = 60
   */
  stability: number;
  /** 
   * Greed factor (0-1), how farm focused a player is.
   * Higher value indicates a greedier player.
   * Used to adjust the overall team performance.
   * Results peak as the team average greed approaches 0.5.
   * Higher or lower values reduce the teams performance.
   * Calculated as follows:
   *  - Calculate the overall team performance by sum of all players performance
   *  - Determine greed factor as: 1 - 2*(|average_greed - 0.5|)
   *  - Adjust overall team performance by multiplying with greed factor
   * 
   * Example:
   *  - Average greed: 0.6
   *  - Greed factor: 1 - 2*(|0.6 - 0.5|) = 0.8
   *  - Adjusted team performance: 100 * 0.8 = 80
   */
  greed: number;
}
