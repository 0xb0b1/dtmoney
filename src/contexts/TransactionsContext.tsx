import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface Transaction {
  id: number
  type: 'income' | 'outcome'
  category: string
  description: string
  price: number
  createdAt: string
}

interface TransactionContextType {
  transactions: Transaction[]
}

interface TransactionsProviderProps {
  children: ReactNode
}

const TransactionsContext = createContext({} as TransactionContextType)

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = async () => {
    const response = await fetch('http://localhost:3333/transactions').then(
      (response) => {
        return response.json()
      },
    )

    setTransactions(response)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => {
  const context = useContext(TransactionsContext)

  return context
}
