Design a board game that represents each country scaling their data centers to build an artificial intelligence. The players can be nation-states (considering some of the smaller or state-concentrated ones) or they can be a firm within a democratic nation. For example, you can play as equivalent of OpenAI, Google Anthropic, or you can play as an authoritarian state such as the UAE or China, and the rules for each are a little bit different. The game was designed obviously to be one of the big firms or China, but you can also play a smaller nation and you get different bonuses, power-ups, and goals to make it more interesting, but the small nations are meant to be more difficult. I'm gonna take some notes, design this game super quickly, and try to prototype it instead of spending years and years learning about board games. 

- Working Title: Scale
- Setting: Futuristic AI Race
- Elevator Pitch: Compete on the global stage to be the first nation to create AGI and rule the world
- Target Audience: 16 and up
- Players: 2-5
- Core Objective
	- To Win: Be the first to scale your AI to AGI or make the most progress before the last turn
		- How: Pass power check and then spend compute and data
	- Game Length: 60-90 minutes
- Components:
	- Board: Individual economy cards with shared resource pool
	- Cards: Initiative Cards, Event Cards
	- Tokens/Pieces: Money, Compute, Research, Talent, Power, Power Plants, Data Centers, Research Labs
	- Other: Scale Tracker, Alignment Tracker, (p)doom tracker 
- Setup:
	- Starting Player: Highest Dice Role
	- Initial Resources/Pieces: 4 Money
	- Board Arrangement:
	- Other Setup Rules:
- Turn Structure:
	- Turn Phases:
		- Draw Initiative Card
		- Capital: Collect all money owed
		- Buy and Build
			- Talent: Recruit or Poach
			- Buy: Compute or Research
			- Build: Datacenter, Lab or Power Plant
		- Scale: AI or Align
			- Publish Research 
		- Draw Event Card
	- Interaction: Compete or Ally for shared resources, Sabotage plans, Adapt to opponent moves 
- Core Mechanics:
	- Primary Mechanics: 
		- Resource Management: Optimize supply chain to scale your AI the fastest 
		- Dice Rolling: Adds chance to actions like poaching and alignment 
		- Worker Placement: Picking talent modifiers
		- Deck-Building: Stacking Initiative cards
	- Secondary Mechanics: 
		- Tech Tree
		- 
    

    
- **Secondary Mechanics:** (Supporting systems, modifiers, special events)
    
- **Randomness vs. Strategy Balance:**
    

---

## **7. Progression**

- **How the Game Advances:** (Rounds, time track, escalating difficulty, scarcity of resources)
    
- **Player Growth:** (Do players get stronger/weaker as the game goes on?)
    
- **Catch-Up Mechanics:** (How do lagging players stay competitive?)
    

---

## **8. Endgame & Scoring**

- **End Trigger:** (Number of rounds, depletion of deck/resources, player achievement)
    
- **Scoring System:** (Points, objectives, achievements)
    
- **Tiebreaker Rules:**
    

---

## **9. Special Rules**

- **Unique Abilities:** (Player powers, asymmetric factions)
    
- **Events/Randomizers:** (Cards, dice, external conditions)
    
- **Optional/Advanced Rules:** (Variants, expansions, house rules)
    

---

## **10. Aesthetics & Theme Integration**

- **Art Style/Feel:**
    
- **Narrative Flavor:** (How does the theme reinforce mechanics?)
    
- **Immersion Hooks:** (What makes the game feel alive?)
    



- Resources: Talent (tokens), Compute, Data, Power, Money
	- Talent
		- Market of 3 to recruit with money
		- 3 slots to populate
		- Each has powers public to all
	- Compute: Central pool to buy from (representing Taiwan), replenished each round
- Actions
	- Poaching (dice)
		- If successful, second roll for intel
	- Build (money)
		- Datacenter
			- Stores compute
		- Research Lab
			- Produces data
		- Power Plant
			- Moves up power metre
			- Nuclear: 1 power
			- Solar: 1/2 power
			- Wind: 1/4 power
			- Events destroy a power plant you select so balance of cost-efficiency vs resilience 
		- You build your buildings on a limited grid representing bottlenecks: sprawling data centres, wind farms, tile efficiencies 
			- Algorithms save on data center space
			- Nukes allow building tall
			- Research labs are modifiable with talent
		- Buy (money)
			- Compute (Abundant then scarce)
		- Research (talent)
			- 
		- Scale (data and compute)
			- Check on min power
			- Return compute to pool
			- Discard data
			- Roll alignment
		- Align (data and compute)
			- Costs same as your next possible scale (cheaper earlier but lose lead)
- Initiative Cards
	- Algorithm - 1 free compute for rest of gam
	- Export Ban (3) - place, move or keep in place ban on 1 player - all compute costs double for that player
- Event Cards
	- AGI Timelines (2) - Either remove an additional event card or add one from the discard pile and shuffle the deck. If discard pile empty, unable to add card
	- Semiconductor Shortage: Remove the next five available compute tokens from the game permanently 
- Players
	- USA: Compute max
	- EU: Data max
	- Gulf States: Money max
	- China: Power max
	- India: Talent max
- Alignment (one die)
	- Level 1-2 free
	- Level 3 - 5/6
	- Level 4 - 4/6
	- Level 5 - 3/6
	- Level 6 - 2/6
	- Level 7-10 - 1/6
	- Scaling alignment sets it back one slot
- you can scale fast initially but them lose control of your AI and kill everyone 
- You can scale slow initially and catch up later if you invest in alignment (a slider that shifts both ways on events and if private?)
- The ai levels are 10: chessbot, chatbot, … ceobot, dyson sphere
- Tech Trees: paths to scale that unlock techs: military, corporate, humanitarian 
	- Military - steal compute (bypass export ban) steal from Taiwan first, then player with least military track - tie you pick
		-  Spend power to advance
		- This functions as a check on hogging compute
	- Humanitarian gets a data bonus due clinical trials
	- Corporate gets money bonus
	- These Interplay with country bonuses to change playstyle
- Talent is a resource and can be poached. You know who the talent is and how their powers can combo with your build. You can also use this to fake out and bluff about your build
- Talent
	- Venture Capitalist - +1 money at start of turn
	- AI Researcher - +1 research at start of turn
	- Supply Chain Expert - +1 datacenter at start of each turn
- Parking Lot
	- PDoom tracker - collective cooldown tracker to stop too fast a game
	- Limited event cards - hard cap on game when last card drawn. Different player draws each turn and can elect to not sraw, extending game one turn
		- If in lead, you want to end the game but risk a setback event
		- If trailing, you want to slow it down
	- The training data is country specific and getting one from each country (in play) gets your a bigger bonus. The more 2 pairs you can make the better, but also the most 3,4,5 pairs are even better. 1x data is the least effective. You can trade training data through a 3rd country to get around embargos etc.
		- Data firewalls are also a card to be pulled and played to tweak alliance potential on the board. They can be removed as well.
		- Training data is a die modifier on each scaling run. It allows you to scale faster and make up for compute a little bit
		- You can trade 3 of your own data for one different colour data from the stash to not get totally bottlenecks






Turn Order,

turn direction, turn order needs to be decided as well.

On your turn, you basically get to do as many actions as you want until you pass it to the next player. I think that's a fair way to put it. So on turn one, players start maybe a couple things on the board.

We'll decide what things should be put on the board to speed up round one in time.

But that being said, on turn one, a unmodified player should be able to buy one research talent,

buy one Data Center, buy one compute

buy one research lab and

generate one data

by One power plant and

you

and Scale

and roll for alignment, but on turn one, there's no alignment, so it's a three beat.

Now that's a lot, so let's add some preconditions here.

Well also it may be able to be able to pull a card.

So there needs to be, let's say, two decks here.

One is an initiative deck, and that if that's a card they pull at the beginning of the turn, which may dictate how their turn happens. So it's new information keeps them standing two at the end of the round, the very last player pulls an Event deck.

That event gets reconciled before the end of the turn,

and

that Event deck, once it's out of cards,

becomes the end of the game, and the player who scale the farthest wins, if not tybrick comes in now that Event deck on a few small occasions could be added to or taken away from, to speed up or slow down the game, and those will be actions that players can take accordingly, depending on whether what's advantageous to them.

Now let's go back to modifiers for term one, it could be a rule where you cannot buy building and then build on at the same time,

there should also be an order of these actions that makes logical sense.

For example, the buying of compute and data should happen before the building round.

That's fair to say,

talent acquisition slash poaching should happen first, that basically creates a modifier for all the other actions we're trying to take. So what are the modifiers?

Modifiers are talent modifiers. Are your initiative cards. So

think that's it. Your compute data centers are just simple purchases and builds.

Your research labs build

those two just function a little differently,

power plants are filled.

I imagine the money you get is based on your level of scaling.

It's that alignment which doesn't help with

Money acquisition,

which emphasizes how slow that is.

Now for the build sides power plants work well as you have a concentrated power versus power makes a lot of sense.

Data Centers just being the one for one place to drop

compute.

What do we work with there?

Do we work with adjacencies, where you can also put down additional compute, where two data centers meet?

That's a bit of compounding,

because if you were to think about often, placement,

two data centers will always, which

is great,

read data centers allows you to add to compute as well.

And four data centers actually three, even though the Square

move

it pieces.

Link a little differently, picking the right one out of the shared pool data center files could help.

Okay, so data center tiles play with the idea of adjacencies, puzzle piece and then mix to lead to an optimization problem, and then research labs and is research labs may produce more data depending on

their adjacencies to compute.

So then you end up with a trade off, which pieces are the most optimal place, based on data centers

and compute, data centers and research labs is what I'm in. I that's beginning to be a be a theme here.

Need to decide whether
the different nations get starting bonuses or ongoing bonuses. That's a later problem. First, let's just figure out the quantum mechanics

here. Is there too many things going on here?

Should the reason why? Then data center tiles just combined one sort of tile?


That's kind of an ongoing bonus. So every scaling run now gets one for you compute that's true to have these things are in real life. The export band card allows you to place the export band card or swap it to a different player.

Alliances should allow some sort of pooling of compute or data or power.