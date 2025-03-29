import { Container } from "@mui/material"

export const Footer = () => {
  const CurrentYear = new Date().getFullYear();

  return (
    <Container >
        <div className="flex flex-col pt-3 pb-3 h-56">
            <nav className="flex justify-center space-x-5 mt-auto  mx-auto lg:mx-0">
                
                <a href="https://fakestoreapi.com/" target="_blank" className="hover:lg:text-primary">Api</a>
                <a href="https://cv-card.onrender.com/" target="_blank" className="hover:lg:text-primary">About Me</a>
                <a href="https://github.com/piotrGrigoret" target="_blank" className="hover:lg:text-primary">Github</a>
                
            </nav>
            <h4 className="text-center mt-6">{CurrentYear}</h4>
        </div>
    </Container>
  )
}
