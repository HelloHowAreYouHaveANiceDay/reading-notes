# Operation Management

## Four dimensions

1. Cost
    1. efficiency
        1. labor
        2. customers/space
2. Quality
    1. product quality
        1. ambience
        2. courtesy
    1. process quality
        1. freshness
3. Variety
    1. customer heterogeneity
        1. items on the menu
        2. percent of item requested
4. Time
    1. responsiveness to demand
        1. turn around time

Two ways of competitive advantage **cost leadership** or **differentiation**

## Efficiency frontier

There's always operation tradeoffs.

The efficiency frontier is where redesigned process smarter and reducing waste in the system, offsetting trade-offs and allowing the company to move up and to the right on both axes.

This helps companies decide which of the four dimensions they should improve upon.

## Process Analysis

### Bottleneck

**Resource**: a worker or station that processes a flow unit

**Processing Time**: how much time a resource spends

**Capacity:** 1/processing time. How many units can the worker make per unit of time if there are m workers at the activity.

**Bottleneck:** process step with the lowest capacity

**Process Capacity:** capacity at the bottle neck.

**Flow Rate:** Minimum Demand rate or Process Capacity

**Utilization:** Flow Rate / Capacity

**Flow Time:** The amount of time it takes a flow unit to go through the process

**Inventory:** number of Flow Units in the system.

### Labor cost and Utilization

**Cycle time** = 1/flow rate =
how much time passes between the flow of two units

**Direct Labor Content:** sum of processing times

**Direct Idle time** = sum of (cycle time - processing time)

**Average Labor utilization** = Labor Content/Labor Content + Direct Idle Time

**Cost of direct Labor** = total wages per unit of time / flow rate per unit of time.

::: tip Why labor costs matter to the value chain
Companies that purchase products or services from contractors or suppliers are just shifting the labor cost out of their books and into the books of the supplying company. As you roll up the total cost across the value chain a greater percentage is given to logistics and labor.

example: Foxcon's labor force in Apple's value chain.
:::

### Little's Law

Inventory = Flow Rate * Flow Time

Out of the three fundamental performance measures, two can be chosen by management, the other is given by nature.

If flow rate is held constant, then reducing inventory would reduce flow time

### Inventory Turns

Inventory turns is the amount of time a dollar snside the operation. There is a cost advantage to turning over inventory faster than competitors.

Inventory Turns = Cost of goods sold / Inventory

Inventory Turns = Average Supply of Inventory per day * days in a year

Inventory cost, the cost to the company to hold inventory for a year. Most major companies incur a capital cost of 10%

Inventory turn capture how well you are using working capital.

### Make to stock vs Make to Order

variability

buffer or suffer:
in a system that cannot buffer variability, flow rate will suffer.

Sandwich waits for customer, or customer waits for sandwich.

Make to Stock is better:
Scale economies in production
Rapid Fulfillment (short flow time)

Make to Order is better:
Fresh preparation (flow time for sandwich)
More customization (don't hold all versions of a sandwich)
Produce exactly the quantity needed

Reasons for Inventory

1. Pipeline Inventory: need inventory because flowtime is greater than 0
   1. little's law.
2. Seasonal Inventory: driven by seasonal variation but constant capacity
    1. Steady production but varied demand
3. Cycle Inventory: Economies of Scale in Production
4. Safety Inventory: Buffer against demand
5. Decoupling Inventory/Buffers: Buffer between internal steps.

### Multiple Flow Units

Build a resource and demand matrix to calculate the demand on resources based on the units that flow through that resource.

Total Demand / Capacity = Implied Utilization

Units can be genericized to "minute of work" units. This allows you to join differentiated flow units. Works well with processes with attrition loss. Shows, Sales leads, Underwriting.

## Productivity

Productivity = Units Output Produced / Input Used

Multifactor Productivity = Output / (Capital + Labor + Materials + Services + Energy)

Productivity is the percentage of input used productively towards the output. It can never exceed 100%. You cannot work more time than in an hr.

### Seven Sources of Waste

Less waste = more productivity

"Moving is not necessarily working"

1. Overproduction
   1. Mismatch between supply and demand
2. Transportation
3. Rework
   1. do it right the first time
   2. siphons productivity from other resources
4. Over-Processing
   1. Stirring an already mixed cup of coffee
5. Motion
   1. economic design of the workspace
6. Inventory
   1. a buildup of inventory indicates a mismatch between supply and demand
   2. inventory always has costs
7. Waiting
   1. Idle Time

1-5 is resource centric

**Intellect** is also a form of waste. Wasting individual worker's ability to contribute to process and quality improvements through what they know.

### Financial Value of Productivity

Process management techniques allow us to estimate the financial impact of process improvements.

Modeling the relationship between process and profit gives us a way to understand the downstream effects of small process improvements. A small change in a process can have exponential effects on the overall.

### Key Performance Indicators and KPI Trees

a KPI tree visualizes all variables and what they impact. Allows for sensitivity analysis on which variables most impact profits.

- Profit
  - Revenue
    - Flow Rate
      - Demand
      - Capacity
        - bottleneck
          - processing time
    - Dollars per customer
  - Cost
    - fixed
    - variable
      - $ per order
        - ingredients
      - flow rate

Break even point is the place where you start making money, every additional unit contributes a bigger proportion to the bottom like.

### Overall Equipment Effectiveness

All the time you have available on a resource reduced by all the things that contributes to waste, leaving the fraction that actually contributes to value add.

Downtime losses: from breakdown and changeovers

Speed losses: idle time and minor stops, reduced speed of work

Quality losses: defects and startup time

Total uptime * Availability Rate = available time

Available time * Performance rate = Net Operating Time

Net Operating Time * Quality Rate = Overall Equipment Effectiveness (OEE)

### Takt time

Idle time occurs in every resource that's not the bottleneck. If you are constrained by demand, even the bottleneck has idle time.

Line balancing are adjustments we can make to spread the work to reduce idle time.

Takt time is the flow rate to perfectly meet demand.

with perfect line balance, takt time helps us determine how many people is needed to do the work.

How to balance the line:

1. determine takt time
2. assign tasks so that total processing times is less than Takt time
3. assign all tasks
4. minimize the number of people needed

### Quartile Analysis

In the real world, reducing variability is a big element in increasing productivity.

In a pool of resources/workers compare the high quarter operator with the low quarter operator. Reveals processes where there is a dramatic variation.

if we can transfer best practices from high performers to low performers we can increase the overall average productivity.

### Productivity Ratios

Productivity = Output / input

it's often hard to measure so often the monetary equivalent is used to create a common baseline.

ex: labor productivity = revenue / labor costs

How to differentiate where productivity is coming from

Revenue / Labor Costs = (Revenue / Output) x (Output / Capacity) x (Capacity / Cost)

Revenue / Labor Costs = Yield x Transformation Efficiency x Unit cost of capacity

the different ratios each captures different things, this allows us to find the driving factors.

## Quality and Defects

Performance quality: extent a product or service meets consumer expectations

Conformance quality: whether the process is carried out the way it should be

built in redundancies guarantee performance in the case of an error in conformance

"the swiss cheese model"

in one slice of cheese, there are holes. When slices are stacked, it becomes less and less probably for you to see through all the stacks.

### quality and flow

### Six Sigma

Lower specification limit (LSL)

Upper specification limit (USL)

Capability score = (USL - LSL) / (6x standard deviation)

### Control charts

Common cause variation (low level)
low variability but still common

Common cause variation (high level)
high variability, but still common cause

Assignable cause variation
identifiable cause of the variation

statistical process control

Capability analysis -> conformance analysis -> Investigate for assignable cause -> eliminate assignable cause -> repeat

### Jidoka

a long information turnaround time keeps us from improving. a large inventory buffer between processes delays the alert for a defective unit.

Where the defect identified effects how much loss is incurred due to the defect.

defects before the bottle neck is driven by input cost, while defects after the bottle neck incur the opportunity cost of a unit of sales.

Jidoka = a malfunction is automatically detected, alerted, and the process is stopped.

Andon Cord = a cord running along the entire line, where any worker that detects a defect can stop the line.

### Problem solving (finding the root cause of defects)

Ishikawa diagram
fish-bone shaped diagram to find the root cause.

Pareto chart
maps out the assignable causes of a problem in the categories of the ishikawa diagram.

80/20 logic. 80% of the defects is caused by 20% of the process.

Iteration between the real world and the model(thought) world increases the connection between the two and enhances our ability to improve the process.

