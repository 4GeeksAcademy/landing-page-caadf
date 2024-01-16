import React from 'react'

const Footer = (props) => {
    return (
        <>
            <footer class=" text-center text-lg-start bg-dark">
                
                <div class="text-center p-3 text-light">{props.final}

                </div>

            </footer>
        </>
    )
}

export default Footer