import { useTransactions } from '../contexts/TransactionsContext'

export const useSummary = () => {
  const { transactions } = useTransactions()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.outcome += transaction.price
        acc.total += transaction.price
      } else {
        acc.income += transaction.price
        acc.total -= transaction.price
      }
      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}
