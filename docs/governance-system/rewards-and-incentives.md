# Rewards & Incentives {#rewards-incentives}

House of Stake is exploring the introduction of a structured incentive system to reward meaningful participation in governance — both for veNEAR holders and active delegates.
Below is a theoretical outline of how this could work.

## Rewards for veNEAR Holders {#rewards-for-venear-holders}

veNEAR holders receive regular rewards in exchange for locking tokens and participating in governance.

![Alternative Opportunites Available for veNEAR Holders](assets/venear-holders.png)

- Funded by 0.5% annual NEAR inflation
- Distributed proportionally based on veNEAR amount and lock duration
- Voting activity may become a requirement to claim rewards
- Rewards must be manually claimed (not automatic)
- Designed to be competitive with DeFi yield (target APY: ~5.8–8.8%)

![Expected Rewards Expenditure when veNEAR scales](assets/venear-rewards.png)

## Funding Source {#funding-source}

All incentives are paid from a predictable and capped funding stream:

- 0.5% protocol inflation dedicated to governance
- Possible future funding via ecosystem revenue (e.g. protocol fees)
- Sustainable and transparent budgeting model

### Dynamic veNEAR Reward Scaling {#dynamic-venear-reward-scaling}

As veNEAR adoption grows, governance rewards must scale **transparently** and **sustainably** — without requiring constant manual intervention by the Screening Committee.

To achieve this, `veNEAR_rewardsAPY` can be calculated dynamically based on the current total supply of veNEAR using the following formula:

$$
veNEAR_{rewardsAPY} = \frac{198}{\sqrt{veNEAR_{supply}}}
$$

This ensures that:

- Rewards scale **inversely with veNEAR supply**
- APY remains competitive early on
- Total NEAR outflows stay bounded as the system scales

**veNEAR APY vs veNEAR Supply**

![Determining APY by veNEAR Supply 1](assets/venear-apy-vs-supply.png)

## Reward Examples Based on Locked NEAR {#reward-examples-based-on-locked-near}

To illustrate how veNEAR incentives convert into actual NEAR rewards, here’s an example table based on a 5.8% annual yield.

![Rewards](assets/rewards-5.png)
