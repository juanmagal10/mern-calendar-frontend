import { useFetch } from "../hooks/useFetch"


export const MultipleCustomHooks = () => {

    const { data, isLoading, hasError } = useFetch('https://breakingbadapi.com/api/quotes/3')
    
    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />
    {
        (isLoading)
            ? (
                 <div className="alert alert-info text-center">
                Loading...
                </div>
            )
            : (
                   <blockquote className="blockquote text-end">
                <p className="mb-1">Hola Mundo</p>
                <footer className="blockquote-footer">Juanma Galvan</footer>
            </blockquote>
            )
  }
    



           

         
        </>
  )
}


