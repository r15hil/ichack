import React from 'react'

const EnglishClass = () => {
    const [toggleMobileNavbar, setToggleMobileNavbar] = useState(false)

    const handleToggleNavBar = () => {
        setToggleMobileNavbar(!toggleMobileNavbar)
    }

    const handleCloseNavBar = () => {
        setToggleMobileNavbar(false)
    }

    return (
       <p>
           English Class
       </p>
    )
}

export default EnglishClass
