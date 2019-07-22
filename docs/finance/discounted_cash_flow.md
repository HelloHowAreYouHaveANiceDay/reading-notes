# Discounted Cash Flow Application

## Net Present Value (NPV)

the NPV represents the present value of expected cash inflows less the present value of expected outflows.

Steps to calculate NPV:

1. identify all costs (outflows) and benefits (inflows) associated with an investment
2. determine the appropriate discount rate or opportunity cost for the investment
3. using the discount rate, find the PV of each cashflow.
4. Compute NPV as the sum of discounted cash flows.

## Internal Rate of Return (IRR)

rate of return that equates the PV of inflows with the PV of costs.

alternatively discount rate for which the NPV of an investment is 0.

## NPV decision rule

- Accept projects with positive NPV
- Reject projects with negative NPV
- When two projects are mutually exclusive, accept the project with higher NPV

## IRR decision rule

- Accept projects with an IRR greater than the required rate of return
- Reject projects that are less than the firm's required rate of return

## Holding Period

Holding period return is the percentage change in the value of an investment over the period it is held.

HPR = (ending_val - beginning_val) / beginning_val

## Money Weighted Return

Money weighted returns is the application of IRR to investment portfolios

## Time Weighted Return

rate at which $1 compounds over a specified performance horizon. Averages a set of values over time.

to calculate annual time weighted

1. Value the portfolio immediately preceding significant additions or withdrawals. Form subperiods over the eval period that correspond to dates of deposits and withdrawals
2. compute HPR of the portfolio in each subperiod
3. Product of (1 + HPR) for each sub period to obtain total return.

If the total investment period is greater than one year, you must take the geometric mean of the measurement period return to find the annual time weighted rate of return.

Time weighted return is the preferred method of performance measurement as it is not affected by the timing of cash inflows or outflows.

## Bank Discount Yield

Things like US T bills are quoted on a _Bank Discount Basis_

annualized_yield = ((face_value - purchase price) / face_value) x (360 / num_of_days_to_maturity))

bank discount yield is not representative of the return earned by an investor!

- bank discount yield annualizes using simple interest and **ignores compound**
- Bank discount yield is based on the face value of the bond, not its purchase price.
- bank discount yield is annualized based on a 360 day year rather than 365

Holding period yield (HPY) is the total return an investor earns between the purchase date and the sale.

HPY = (mature_price - initial_price + distribution) / initial_price

Effective Annual Yield (EAY) is the annualized value that accounts for compound interest.

EAY = (1 + HPY)^(365/t) - 1

Money Market Yield (CD equivalent yield) is the annualized holding period yield assuming a **360** day year. Money market yield is used to make the quoted yield on a T-bill comparable to yield quotes from interest-bearing money market instruments that pay on a 360 day basis.

Rmm = HPY x (369/t) = (360 x bank_discount_yield) / (360 - (t x bank_discount_yield))

::: tip
The HPY is the actual return an investor will receive if the money market instrument is held until maturity

The EAY is the annualized HPY on the basis of a 365 day year and incorporates **compounding** effects

The Rmm is the annualized yield that is based on the price and a 360 day year and **does not** account for compounding.
:::

## Bond Equivalent Yield

the Bond Equivalent Yield refers to 2x the semiannual discount rate. It is based on the fact that the yields on US bonds are quoted as twice the semiannual rate because the coupon interest is paid in two semiannual payments.

