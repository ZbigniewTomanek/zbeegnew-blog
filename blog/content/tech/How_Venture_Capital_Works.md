---
title: "How Venture Capital Works"
date: 2023-11-24T16:51:04+01:00
draft: false
author: Zbigniew Tomanek
---

<br>

Embarking on my first startup journey was an adventure filled with learning curves. It's through the errors I stumbled upon that I gained invaluable insights into the workings of Venture Capital. I'm excited to share these learnings in this article, hoping it will guide others to sidestep the pitfalls I encountered.

For a deeper dive into my startup saga check out my detailed story [here]({{< ref "/life/Story_Of_My_First_Startup/_index.md" >}} "Story Of My First Startup").


## They Play Long Game With Big Numbers

<br>

Venture Capitals (VCs) seem like they've cracked the code to immense profits, despite many of their startup investments failing. It's all about the long game and big numbers (plus, let's not forget, they're swimming in money). Here's a breakdown of their strategy, which is pretty much high-stakes, high-reward gambling:

1) **Modest Investments in Many Startups**: For a VC with a $100M war chest, dropping $2M on a startup is pocket change.
2) **Equity is Key**: A typical pre-seed investment might snag the VC a 5-10% stake in a company.
3) **Play the Waiting Game**: About 90% of these startups might crash and burn. That's expected.
4) **Bet on Exponential Growth**: The survivors aren't just hanging on; they need to be skyrocketing, ideally growing 60-70% annually, especially in IT.
5) **Ride the Growth Wave**: If a startup does hit its stride, growing 100% annually for 5 years, it's a bonanza. The VC's stake could be worth 32 times their original investment.
6) **Jackpot Scenario**: Sometimes, a startup gets bought out. The new owners have to pay off the VC, often leading to returns of 100x the original investment.
7) **The Unicorn Jackpot**: Hitting a unicorn startup is like striking gold for VCs. These rare, mythical creatures of the business world can yield returns of 1000x the initial investment. Imagine turning a $1M investment into a whopping $1 billion! As of now, [there are only 1348 recognized unicorn companies globally](https://pitchbook.com/news/articles/unicorn-startups-list-trends), making them an exclusive club. Scoring an investment in one of these unicorns is a game-changer, catapulting a VC's success to stratospheric levels.


In short, VCs sprinkle their funds across numerous ventures, knowing most will fail. They're betting on that rare gem that'll not just succeed, but explode in value, covering all their losses and then some.


### Simulation Is Worth A Thousand Words

<br>

To better feel what kind of dynamics are at play, I've created a simple simulation of a VC's investment strategy. It's based on the following assumptions:

- **Initial Capital**: The VC starts with $250M.
- **Operational Costs**: They burn through $250k every quarter just to keep the lights on.
- **Investment Range**: Each startup receives between $0.25M and $2M, giving the VC a 7% stake.
- **Investment Volume**: The VC juggles 5-25 startups every quarter.
- **Startup Survival Odds**: Each startup has a high failure rate (85-92%) that slightly improves over time (a 2% decrease per quarter).
- **Growth Potential**: Those that survive can experience a growth spurt ranging from 30% to a whopping 2000% per quarter.
- **Exit Strategy**: Starting from the third quarter, there's a 5% chance a startup gets bought out, netting the VC a 10x return on their investment.

You can play with the simulation to test the VC waters by yourself! Adjust the investment parameters to see when the strategy fails or flourishes. Your goal: find the sweet spot for extraordinary profits without tipping into bankruptcy.

 **If you drew a simulation where the VC went bankrupt, change any parameter and the simulation will recalculate**


<iframe src="/html/simulation.html" style="width: 100%; border: none;" id="myIframe"></iframe>
<script>
    var iframe = document.getElementById('myIframe');
    function resizeIframe() {
        try {
            var contentHeight = iframe.contentWindow.document.body.scrollHeight;
            iframe.style.height = (contentHeight * 1.02) + 'px';
        } catch (e) {
            console.error("Error resizing iframe: ", e);
        }
    }
    iframe.onload = resizeIframe;
</script>


## They Buy Only proven Ideas

<br>

Venture Capitalists (VCs) have a knack for backing ideas that already show real-world promise. Remember, a groundbreaking concept needs more than just a wow factor; it needs concrete evidence to attract funding. VCs' criteria for this evidence change with the industry and the investment stage, but here's what they usually look for:

- **Solid Market Research**: This isn't just about numbers. It's about showing a real hunger for your product in the market.
- **Tested Prototype**: A gadget that works wonders in the lab isn't enough. It needs to have faced the real world and come out shining.
- **Scalable MVP**: Your Minimum Viable Product shouldn't just work; it should have the potential to grow big.

And hey, VCs aren't just throwing darts in the dark. They and their analysts dig deep. They'll poke and prod every part of your pitch, looking for weaknesses. It's not just about whether your idea is cool; it's about whether it's bulletproof. Brace yourself for a flurry of tough questions that might seem a bit harsh. It's all part of their process, not a judgment on you or your brainchild. Bottom line: **VCs aren't shopping for companies or products; they're investing in ideas that have a solid shot at success and scalability**.

## The Power of Reputation

<br>

The impact is clear when a figure like Sam Altman announces a new company vision. Investment funds leap into a competitive frenzy, each vying to offer the most attractive terms. This dynamic is not exclusive to high-profile cases; it resonates at every level of entrepreneurship. First-time startup founders face the greatest challenge. Without any prior success in the business realm, they are viewed as significantly higher risks by Venture Capitalists. This underscores the importance of personal branding and the history of your earlier business ventures. These elements can be as critical as the merit of your new idea. After all, a track record of past achievements suggests a promising potential for future successes.


## The Fortunate Ones Will Pay Their Dues in Blood

<br>

In understanding the perspective of Venture Capitalists, it's crucial to consider the vantage point of a startup founder. The picture isn't always rosy here. To be blunt, as a founder, you're a good $50 million short of playing at the same level as venture capitalists. This means, from your standpoint, there's a staggering 90% likelihood that your dreams of an IPO and global recognition might not materialize.

However, if you've managed to catch the eye of the free market and secure investment from a fund, brace yourself for a whirlwind journey. You're now part of a select group, but with this comes a relentless workload. Remember, we mentioned earlier that for a company to thrive, it needs to boost its value significantly each year? This quest for growth becomes your battle cry in the capitalist arena. Be prepared: if fortune smiles on you, you'll find yourself immersed in intense efforts to achieve this exponential growth. Prepare yourself for the fact that if you're lucky, you'll be toiling like a wolf for years under the enormous pressure of exponential growth. At least if you're successful you'll win money to support your health later!

## The Dilemma of Growth vs. Sustainability

<br>

Another outcome of the necessity for exponential growth is a potential shift in incentives: **The primary objective for a Venture Capitalist, who partially owns your company, is robust growth and increased profits.** This focus can clash with the vision of a sustainable business model that prioritizes long-term user satisfaction over rapid profit escalation. In such scenarios, you might be compelled to make choices that don't align with your users' best interests. A notable example is Snapchat, which, to generate profit for its investors, had to introduce ads and paid features. [These changes have not been universally well-received by their user base](https://www.socialmediatoday.com/news/snapchat-receives-a-flood-of-negative-reviews-in-response-to-my-ai-expans/648473/). This tension is an important factor to weigh when considering venture capital funding.


## Reflecting on the Venture Capital Landscape

<br>

Delving into the workings of Venture Capitals, I've experienced a real `red pill` moment. It appears to be another facet of post-capitalism where innovators and creators are viewed as prime investment assets, primarily for generating sheer profit. This dynamic also leverages the 'American Dream' myth deeply ingrained in our collective psyche, where anyone, irrespective of their background, can ostensibly achieve financial and personal success through sheer grit, determination, and entrepreneurship.

On a personal note, this exploration leads me to a pivotal decision: to pursue my own ideas and innovations independently, steering clear of Venture Capital. My aim is to build self-sustaining businesses that can be nurtured and grown using my own resources and earnings.

**Thank you for joining me on this journey! If you have questions, comments, or suggestions, I'd love to hear from you!**
