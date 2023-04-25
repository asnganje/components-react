import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";
import { useEffect } from "react";

export default function ModalPage() {
    useEffect(()=>{
        document.body.classList.add('overflow-hidden')

        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    },[])

    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(!showModal)
   
    }

    const handleClose = () => {
        setShowModal(false)
    }
    const actionBar = <div>

            <Button onClick = {handleClick} primary>I accept</Button>
    </div> 
     const modal = <Modal onClose = {handleClose} actionBar = {actionBar}>
                    <p>
                        Here is an important agreement for you to accept
                    </p>
                    </Modal>

    return (
        <div className="relative">
          
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. 
            </p>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. 
            </p>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. 
            </p>
            <Button primary onClick={handleClick}>Open Modal</Button>
            {showModal && modal}
        </div>
    )
}