import { createSignal, createEffect } from 'solid-js'

import Header from './components/Header'

function App() {
  const [first, setFirst] = createSignal('JSON')
  const [last, setLast] = createSignal('Bourne')

  createEffect(() => console.log(`${first()} ${last()}`))
  return (
    <>
      <Header />
    </>
  )
}

export default App
