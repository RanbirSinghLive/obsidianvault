# Algorithms to Live By
Created: 2022-03-04 18:14
Edited: 
By: [[Brian Christian]] [[Tom Griffiths]]
Tags: #book #reference 

## Summary
- A meaty serving of [[heuristics]] from computer science to help you make decisions in everyday life.

### Chapter 1: [[Optimal Stopping]]
- [[knowing when to stop]]
- You should stop looking for something better once you've hit the [[37% rule]]
	- View the first 37% of the options out there, then pick the first option that comes up after those that is better than the first 37%
	- **The goal: Establish a baseline for quality before running out of options**
	- Practical Examples:
		- Spend 37% of the time you've allocated for finding an apartment, before picking the next best one that you view
		- If interviewing three people, hire #2 interviewed if better than #1
			- Result: you will hire the best applicant 37% of the time
			- This example is not perfect as three people is not too many to interview, but the principle scales well
			- Looking for a mate - leap at 73% of dating period (i.e. leap at 26 years if you are planning to date from 18-40)
- First called the [[Secretary Problem]]
- You don't want to stop too early or too late
- "[[Look, then leap]]"
- How [[Information]] plays a role in these [[Games]]
	- No info games - no baseline, use 37% rule
	- Full info games - knowing what the perfect solution looks like before you begin
		- Use a threshold rule. Immediately leap if applicant above a set percentile
		- Base threshold on how many applicants remain
		- Full info game has 58% chance of hiring best applicant
- Case Study: [[Selling a Home]]
	- We have close to full info - market value & the value of each bid
	- Waiting costs money. A good offer today beats a slightly offer months from now
	- How To Win: Set a threshold when listing. Ignore lowballs and accept threshold or higher offer on sight.
	- Counter-point: any risk of offers or savings running out?

### Chapter 2: [[Explore/Exploit]]
- Should you opt for the latest or the greatest?
- The [[Multi-Armed Bandit Problem]] 
- Time is a factor, namely our goals changing as we age
- Don't dwell on next decision. Think about all decisions you are going to make with the same options in your life
- The Interval Matters
	- Exploring vs sticking to favourites depends on how long you are staying in the game
	- i.e. making new friends when moving to a city vs just about to leave
	- Value of Exploration conversely related to time remaining
	- Value of Exploitation goes up as less time remains
**- Explore while you still have time to exploit the resulting learnings** ^86e198
- The Interval ([[Time]]) determines the strategy
- [[You only have one life]]
- Time neutral strategy: if you encounter a good experience, stay. If it's bad, shift
	- **But time cannot be neutralized from human experience**
- Exploring things has inherent value in the act itself

### Chapter 3: Sorting

- Manual sorting machines (for census) led to the invention of computers
- Search engine = *sort* engine
- Sorting does not scale well with datasets
- Possible measures - best sort time, average time or worst possible time
- In Comp Sci. [["Big O" notation]] is used for algorithmic worst possible scenarios
	- Big O of “1” (Constant Time)  
		- ie. time to clean home before dinner party. It will take the same time no matter the guest list
	- Big O of “N” (Linear Time)  
		- Time to pass food around a table scales linearly with the number of guests
	- Big O of “N Squared” (Quadratic Time)  
		- As your guests walk in, they hug all the people in the house
		- Guest 1 - 1 hug, Guest 2 - 2 hugs etc.
	- Big O of “2 to the N” (Exponential Time)
		- Each guest doubles your prep work
	- Big O of “N Factorial” (Factorial Time)
		- A comp sci practical joke
		- [[inside jokes]]

**- Core Problem: What is the minimum work required to institute [[order]]?**

#### Sorting Techniques
**Bubble Sort:**
- simple but very inefficient - Quadratic Time
- Process: comparing two values and moving to either back or front, going over things multiple times until all is sorted
**Insertion Sort:**
- Take all values out of database and put them back in 1 by 1 - Quadratic Time
**Merge Sort:**
- Between Linear Time and Quadratic Time
- 'divide and conquer'
- Sort smaller lists and then collate the sorted lists together (this 2nd step is almost instant in comp sci)
**Bucket Sort:**
- Group items into categories

## [[Sorting vs Searching]]
- There is a central tradeoff
	- Sorting takes upfront effort while searching takes '[[just in time]]' effort
	- [[Sorting something you will never search is a complete waste]]
	- [[Searching something you never sorted is only inefficient]]

### Chapter 4: Caching: Forget About It
- Related how how we use [[Second Brain]] , [[Obsidian]]
- Forgetting can be as important as remembering
- How Computing Memory Works: ^5b31f1
	- Hard drive - large but slow
	- Solid state - small but fast
	- memory access lagging behind processing speed
	- if memory is full, something needs to drop to remember something else
- How do we evict data to make room?
	- 1. Random
	- 2. [[FIFO]]
	- 3. LRU = Least Recently Used (consistently performs the best)

- Temporal locality:
	- Least recently used thing is what we least likely need in the future  
	- "History repeats itself backwards"
	- "Our best guide to the future is a mirror image of the past"

Using [[LRU]] in real life:
- Always put what you just used at the front of the stack

[[The Forgetting Curve  ]]
- Forgetting things and taking longer to mentally compute is driven by have more memories to sift through as we get older
- Could be related to [[spaced repetition]]


### Chapter 5: [[Scheduling]]
- [[How we spend our days is how we spend our lives ]]
	- Related: [[Get the mundane things right]]
- 'We are what we repeatedly do' - Aristotle  
- Case Study: Doing Your Laundry:
	- Wash the load that will wash the fastest first
	- Wash the load that will dry the fastest last
	- Provide maximum overlap for use of both machines
- For Deadlines: make your goals clear and detailed
	- Strategies for success:
		- sort by due date
		- Reducing max lateness:
			- minimize number of tasks late (Moore's Algorithm)
			- get many tasks done, as quickly as possible
				- can use sum of completion times (lower = better)
			- use weight to determine which tasks matter more
				- divide task weight by time to complete
				- do work by highest achievable result per unit of your time
- Most scheduling problems are difficult

### Chapter 6: Bayes Rule
- Deals with predicting the future
- [[Hypothetical reasoning]] - can be used on forward problems to reason backwards and solve current problems
- [[The Copernican Principle]] - assume you are continually at the mid-point of a phenomenon
	- This is a good heuristic to use when we have no good info to go on for estimating
- Some things cluster around a natural value (i.e. lifespan)
- Some things cluster around a [[bell curve]]
- When predicting, it helps to know what type of data distribution you are up against
- [[predictions]]

### Chapter 7: Over-fitting
- We need to realize when it's time to think less
- [[Over-thinking]]
- Ways to prevent over-fitting:
	- Put negative points against complex solutions
	- If you can't explain something to a 5-year-old, you don't understand it well enough
	- [[Occam's Razor]] - when all else equal, simplest answer the best one
	- Allowing an algorithm to run longer may result in a needlessly complex solution
		- Sometimes, stop early
	- **Think less when you have a high degree of uncertainty and limited data to use**

### Chapter 8: Relaxation
- This comes up in [[Travelling Salesman]] problems - which are constraint [[optimization]] problems
	- i.e. a salesman needs to find optimum route of travelling between different cities
	- These types of problems are currently considered [[unsolvable]]
	- A related problem that is easily solvable is the [[minimum spanning tree]] - the min distance connecting all the cities
	- This leads to the idea of **constraint relaxation** , where you solve a tough problem by solving an easier problem first
	- Ways to do: discreet optimization i.e. you can be seated at table A or B, no in between 
	- Case Study: How sports schedules are put together
	- Case Study: The Backpack Problem


### Chapter 9: Randomness
- Related: [[Monte Carlo]] Analysis
- Sometimes sampling via playing/trying is better than pure math solutions
- Related: Rabine’s Algorithm
- Randomness can be a tool to solve problems

### Chapter 10: Networking
- Solving the problem of how we connect
- In PC Terms: Packet switching vs old phone style circuit switching
- Exponential-back off: the algorithm of forgiveness
- Flow control and congestion avoidance  
- AIMD = additive increase, multiplicative decrease.

### Chapter 11: [[Game Theory]]
- Studying and accounting for other people's minds
- Types of literary plots:
	- Man vs Nature
	- Man vs Self
	- Man vs Man
	- Man vs Society
- Game theory related to man vs man and man vs society  
- Topics:
	- [[Recursion]]
	- The [[halting problem]]
		- The goal is to play only one level above your opponent
	- Poker players
	- Leveling war
	- [[Nash equilibrium]]
	- Rock Paper Scissors
	- Dominant Strategies  
	- The [[prisoners dilemma]]
		- The [[Tragedy of Commons]]

- Mechanism Design: change the game.  
	- [[Change the game instead of the strategy]]
	- Related: [[Pick Your Games Carefully]]
	- Also referred to as [[Reverse Game Theory]]
		- Ask what rules will create the behavior we want.  
		- i.e. prisoners dilemma with the Godfather forcing them to be loyal and not inform on each other  
- Information cascade
- [[Vickrey sealed-bid auction]](https://en.wikipedia.org/wiki/Vickrey_auction).

- [[Computational Kindness]]
	- The right action can produce a bad outcome
	- [[Process is all we have control over, not results]]
	- We can hope to be fortunate but we should strive to be wise
	- Stating your preferences helps reduce the computational social problem
	- Making people infer your preferences puts more computational pressure on the group
	- [[clear communication]], even with computers

### Notable Quote**s**
-  [[Inaction is just as final as action]]
-  Seizing the day and seizing a lifetime are two entirely different endeavors
-   Forgetting can be as important as remembering
	- Related [[How to Take Smart Notes]]
-   The best strategy for getting things done might be to [[slow down]]

## Related:
1. 

## References:
1. 