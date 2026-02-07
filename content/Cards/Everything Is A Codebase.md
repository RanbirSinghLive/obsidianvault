When humans first learned to make fire, everything must've looked like kindling. This is how my brain feels now after learning to write code in plain English. Coding agents are so good now that you need precisely zero programming ability to create [[It's Time to Make Software Artisanal|artisanal software.]] Learning to use one agent, Claude Code, prompted me to meditate on how much of daily life’s drudgery could be solved with code-based solutions. I ended up discovering something fundamental about how language and code work.

It turns out the syntax of code and language are the same. It's all verb + noun + condition.

Cavemen would say something like 'start (verb) fire (noun) now (condition).'

Code has the same syntax.

Verbs are functions - actions that do something in brackets:

start()

Nouns are arguments - the thing the action affects:

start(fire)

Conditions are parameters - modifiers of the function/argument combo:

start(fire, timing: now)

Some coding languages map cleaner to this than others, like Python. That’s because Python was explicitly designed for readability.

Python tried to make code readable. But tools like Claude Code and Codex recognize that English is *already* code. You no longer need to learn a legible programming language to begin coding. You can just type out your idea in English (or any major spoken language) and the AI will translate your wishes into executable commands. Andrej Karpathy (ex-Tesla, ex-OpenAI) went viral for claiming that “the hottest new programming language is English.” 

He’s right.

It turns out a lot of problems start looking like codebases when you put them into files your computer can read, write and execute. The subtle trick is often just as simple as putting mundane tasks and their accompanying context into plain text files (markdown.) (Even the naming reveals this: OpenAI called their coding model 'Codex' - literally a synonym for manuscript. The parallel was always in plain sight.)

For example, I tasked Claude Code with analyzing five years of my journal entries and identifying my biggest cognitive blindspots. That English request could be modelled into something like this to start:

Review(blindspots, timing: last_five_years)

Now, look at the ‘code’ of this personal finance request I made and see if you can parse it:

Recommend(Investment, conditions: unregistered_account, wife_is_US_citizen, registered_accounts_already_maxed)

Easy, right? You just parsed code - without knowing how to code.

Here's what makes this different from just automating individual tasks: these codebases can coordinate and run concurrently.

**Coordination means your systems can talk to each other.** Your finance model can check your lease terms before making a payment. Your journal can query your budget to understand spending patterns. Your contract conditions can trigger updates across multiple files. Systems that were always isolated can finally speak the same language.

**Concurrence means they all run at once.** You're not context-switching between your lease, your budget, and your planning doc. You're orchestrating them from above - setting the parameters, defining the relationships, letting them execute simultaneously. You become the conductor, not the performer.

It's starting to feel like the Matrix was prescient. I see code running through everything now. Once you see it, you can't unsee it. And once you can't unsee it, you can start programming it.