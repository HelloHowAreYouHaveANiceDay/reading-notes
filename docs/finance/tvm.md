# The Time Value of Money

Equilibrium interest rates are the required rate of return for a particular investment.

Time Line: diagram of cash flows associated with time value of money problems. Present day is at time zero, with payments as negatives and receipts as positive.

## Future Value (FV)

The process to calculate FV is called compounding

FV = PV x (1+periodic rate of return)^total number of periods

future value factor: (1 + periodic rate of return)^ total number of periods


## Present Value (PV)

The process to calculate PV is called discounting

FV / (1 + periodic rate of return)^number of periods

present value factor or discount factor: (1 + periodic rate of return)^ total number of periods

## Equilibrium

equilibrium interest rates are the required rate of return for a particular investment.

the market rate of return is what investors require to willingly lend their funds.

Opportunity Cost: the amount that would be gained if the funds were in an investment rather than current consumption.

## Risk Free Rate

The **real risk-free rate** is the theoretical interest on a loan that has no inflation.

The **nominal risk-free rate** includes an **inflation premium**. This is what the U.S. Treasury bill rate is.

nominal risk-free rate = real risk-free rate + expected inflation rate

Types of risk

1. default
2. liquidity
3. maturity

## Effective Annual Rate (EAR)

the annual rate of return actually being earned after adjustments have been made for different compounding periods

EAR = (1 + periodic rate)^number of compounding periods - 1

## Annuities

[wikipedia - annuity](https://en.wikipedia.org/wiki/Annuity)

**Ordinary Annuities**
cashflow occurs at the end of each compounding period

**Annuities Due**
cashflow occurs at the start of each compounding period

fv_annunity_due = fv_annunity x (1 + I/Y)

## Present Value of Perpetuity

A perpetuity is a financial instrument that pays a fixed amount at set intervals over an infinite period of time. A perpetual annunity.

pv_perpetuity = payment / (I/Y)

## Future Obligation

Sometimes we need to calculate the size of deposits that must be made to meet a future liability

1. when we need to set up a funding program
2. funding of retirement programs

## PV and FV of Uneven Cash Flows

Uneven cash flow stream is equal to the SUM of PV or FV of each individual cash flow.

## Loan Payments and Amortization

loan amortization is the process of paying back a loan wit ha series of periodic payments. **Amortization** means "the action or process of gradually writing off the initial cost of an asset".

Each payment includes the repayment of principal and an interest charge, and regardless of frequency the payments will be of equal amounts.

In_terest component = beginning balance x periodic interest rate

Principal component = Payment - Interest

``` js
payment = (pv, ror_per_period, periods) => {
  return (pv * ror_per_period) / (1 - Math.pow(1 + ror_per_period, -periods));
}

component_payments = (pv, ror, periods) => {
  const pmt = payment(pv, ror, periods);

  const returns = [];
  for (var i = 0; i < periods; i++) {
    const period = i + 1;
    const beg_balance = i == 0 ? pv : returns[i - 1].end_balance;
    const payment = pmt;
    const interest_component = beg_balance * ror;
    const principal_component = pmt - interest_component;
    const end_balance = beg_balance - principal_component;
    returns.push({
      period,
      beg_balance,
      payment,
      interest_component,
      principal_component,
      end_balance
    });
  }
  // DOES NOT RESOLVE ROUNDING ERROR
  return returns;
}
```

