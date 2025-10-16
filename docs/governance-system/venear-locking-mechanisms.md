# veNEAR Locking Mechanism

To obtain **veNEAR**, users must lock **NEAR**, **stNEAR**, or **liNEAR** tokens in a vote-escrow contract.
The House of Stake governance system supports a **single flexible locking model** that does not require users to commit to a fixed duration.

---

### Locking Model

Users lock tokens without selecting a fixed period.
veNEAR **accumulates linearly over time**, up to a maximum equivalent of 4 years of lock.
Users can initiate an unlock at any time. Once they do, a **45 day cooldown** begins, during which **veNEAR voting power decays to zero**, and tokens become withdrawable at the end.

**Key properties:**

- No fixed period required
- veNEAR accrues gradually (max at 4 years)
- 45 day cooldown after initiating unlock
- Flexible exit at any time

---

### Example: veNEAR Accumulation and Unlock Flow

This mechanism rewards users who consistently keep tokens locked, while still offering the freedom to exit.

1. A user deposits 1 NEAR into the veNEAR contract.
2. veNEAR begins to accrue gradually (e.g., per epoch).
3. After 3 years, the user initiates an unlock.
4. A 45 day cooldown begins — veNEAR linearly decays to 0.
5. After the cooldown ends, the 1 NEAR becomes withdrawable.

![veNEAR Premium and decay calculations for Rolling Lock Approach ](assets/venear-premium-rolling.png)
_veNEAR premium and decay calculations for the locking mechanism_

---

The veNEAR system is built on **stake-weighted and time-based principles**, balancing flexibility with meaningful participation in governance.
It allows users to retain control over their assets while gradually earning influence within the NEAR ecosystem.
The locking model is designed to avoid rigid commitments, while still rewarding long-term alignment and engagement.
