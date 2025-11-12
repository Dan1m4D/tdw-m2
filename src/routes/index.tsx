import { createFileRoute, Link } from '@tanstack/react-router'

const  Index = () => {
  return (
    <article className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-4 text-primary">TDW-M2 Classes</h1>
      <div className='grid grid-cols-4 gap-4'>
        <Link to="/ex1" className="btn btn-primary btn-md">Exercise 1</Link>
        <Link to="/ex2" className="btn btn-primary btn-md">Exercise 2</Link>
        <Link to="/ex3" className="btn btn-primary btn-md">Exercise 3</Link>
      </div>
    </article>
  )
}

export const Route = createFileRoute('/')({
  component: Index,
})
