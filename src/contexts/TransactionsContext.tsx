import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface Transaction {
  id: number
  type: 'income' | 'outcome'
  category: string
  description: string
  price: number
  createdAt: string
}

type NewTransactionData = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: NewTransactionData) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('/transactions', {
      params: { _sort: 'createdAt', _order: 'desc', q: query },
    })

    setTransactions(response.data)
  }, [])

  const createTransaction = useCallback(async (data: NewTransactionData) => {
    const { description, price, category, type } = data

    const response = api.post('/transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
  }, [])

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

// export const useTransactions = () => {
//   const context = useContext(TransactionsContext)

//   return context
// }
