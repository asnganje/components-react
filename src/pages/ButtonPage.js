import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'
import Button from "../components/Button"
export default function ButtonPage() {
    const handleClick = () => {
        console.log('click')
    }
    return(
        <div>
            <div>
                <Button success rounded onClick = {handleClick}><GoBell />Click me!</Button>
            </div>

            <div>
                <Button secondary>Buy now</Button>
            </div>
            
            <div>
                <Button warning onMouseEnter = {handleClick}><GoDatabase />Seal deal!</Button>
            </div>

            <div>
                <Button className = 'mb-5' danger rounded onMouseLeave = {handleClick}> <GoCloudDownload />Hide adds!</Button>
            </div>

            <div>
                <Button primary rounded>Word hard!</Button>
            </div>

        </div>
    )
}