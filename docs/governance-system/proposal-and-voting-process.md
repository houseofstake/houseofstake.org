# Proposal & Voting Process

1. Draft proposal submitted to [NEAR Governance Forum](https://gov.near.org/). Seven day "feedback period" period begins.
2. Community can begin discussing, commenting on, and requesting changes to draft on the forum.

Note that the following steps can happen immediately after the first step, and don't need to wait until the end of the feedback period.

3. Draft proposal submitted to [proposals repository](https://github.com/houseofstake/proposals) as a PR that creates a new HSP in markdown format. See [sample PR](https://github.com/houseofstake/proposals/pull/18). PR target filename should be `HSPs/hsp-xxx.md` in the initial PR, as a HSP number has not yet been assigned. Here's a direct link to create a new file in the correct folder: https://github.com/houseofstake/proposals/new/main/HSPs
4. HSP editor reviews proposal draft and make sure it conforms to the spec: correct format, complete (contains all required sections), and is within the scope of the HSP process/House of Stake governance. HSP editor communicates with author if changes are required.
5. Once HSP conforms to the spec, an HSP editor officially assigns it an HSP ID number, assigns it the "Draft" status, and merges it. At this point, the proposal is a canonical HSP and is eligible for voting (once the feedback period ends).
6. Any author can set the HSP status to "Review" or "Last Call." HSP editors should promptly merge such changes.
7. After the feedback period ends, i.e., at least one week after the initial draft proposal was posted on the forum, any of its authors may [submit it to House of Stake](https://gov.houseofstake.org/proposals) for a vote. They should also update the HSP status on Github to "Voting."
8. Screening Committee reviews the draft proposal. They may or may not choose to approve it for voting. (Note: In HoS v1, Screening Committee approval is required before a vote. In v2, the Screening Committee can instead fast track a proposal, but cannot block a vote.)
9. If approved for a vote, the 14 day voting period begins. Any voter who had voting power (their own, or delegated, veNEAR) _before the start of the vote_ can now vote on the proposal.
10. Voting concludes. HSP status on Github updated to "Final" or "Rejected" depending on vote outcome. For "Sensing" proposals, no further steps are required.
11. For "Decision" proposals, execution passes to House of Stake and the NEAR House of Stake Foundation, and moves beyond the scope of the proposal process.


## Notes

- A HSP author may, at any time, withdraw a proposal, changing its status on Github to "Withdrawn."
- A HSP editor may mark a HSP as "Stagnant" once it's been inactive for six months. "Stagnant" proposals are not eligible for a vote, but the author can ressurrect a "Stagnant" proposal by moving it back to "Draft" at any time.
- Another party may pick up and choose to champion a proposal if the authors withdraw it, or if it becomes stagnant. In this case, they become the new Author.
- By the same token, any proposal may be forked by anyone at any time, permissionlessly. This would be done by creating a new PR, which will get a new HSP number. Note that proposals are all released into the public domain via [CC0 License](https://creativecommons.org/publicdomain/zero/1.0/).
