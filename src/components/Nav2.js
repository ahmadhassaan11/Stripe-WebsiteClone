import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';
import { FaAtlassian } from 'react-icons/fa';
import { useGlobalContext } from '../context'

const Container = styled.div`
    z-index :1;
    width: 100%;
    max-width:1300px;
    margin-right: 0%;
    margin-left: 0%;
    padding-right: 50px;
    padding-left: 50px;
    @media screen and (max-width: 860px) {
        padding-right: 10px;
        padding-left: 0px;
    }
`;

const Button = styled.button`
    border-radius: 20px;
    background: ${({ primary }) => (primary ? '#ff7600' : '#0a2540')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
    color:#fff;
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    font-weight: bold;
    cursor:pointer;
    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${({ primary }) => (primary ? '#0a2540' : '#ff7600')};
    }
    @media screen and (max-width: 960px) {
        width: 100%;
        margin-top: 700px;
    }
`;


const Nav = styled.nav`
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        /* position: sticky; */
        top: 0;
        z-index: 999;
    `;

const NavbarConatiner = styled(Container)`
        
        height: 80px;
        display: flex;
        justify-content: space-between;
        ${Container}
    `;

const NavLogo = styled.div`
        color: #102A42;
        justify-self: flex-start;
        cursor: pointer;
        text-decoration :none;
        font-size: 2rem;
        display: flex;
        align-items:center;
        font-weight: bold;
        margin-left: 1rem;
    `;

const NavIcon = styled(FaAtlassian)`
        margin-right: 0.5rem;
        color: #ff7600;
    `;

const MobileIcon = styled.div`
        display:none;
    
        @media screen and (max-width: 960px) {
            display: block;
            position: absolute;
            top: 20px;
            right: 0;
            transform: translate(-100%, 30%);
            font-size: 1rem;
            color: white;
            background-color: #ff7600;
            border-radius: 20px;
            padding: 4px 16px 2px 16px;
            cursor:pointer;
        }
    `;

const NavMenu = styled.ul`
        display:flex;
        align-items: center;
        list-style: none;
        text-align: center;
    
        @media screen and (max-width: 960px) {
            border-radius: 10px;
            box-shadow: 10px;
            display: flex;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            flex-direction: column;
            width: 90%;
            max-width: 408px;
            margin-right:3% ;
            height: 90vh;
            position: absolute;
            top: 140px;
            right: ${({ click }) => (click ? 0 : '-100%')};
            opacity: 1;
            transition:  all 0.5s ease;
            background: #fff;
        }
    `;

const NavItem = styled.li`
        height: 80px;
        border-bottom: 2px solid transparent;
    
        &:hover {
            /* border-bottom: 2px solid #4b59f7; */
        }
    
        @media screen and (max-width: 960px){
            width: 100%;
            
            &:hover {
                border: none;
            }
        }
    `;

const NavLinks = styled.div`
        color:#102A42;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0.5rem 1rem;
        height: 100%;
        font-weight: bold;
        &:hover{ color: grey; }
    
        @media screen and (max-width :960px){
            text-align: center;
            padding: 2rem;
            width: 100%;
            display: table;
    
            &:hover{
                color: grey;
                transition: all 0.3s ease;
            }
    
        }
    `;

const Right = styled.div`
        flex:1;
        display: flex;
        align-items:center;
        /* margin-left: 30% ; */
        justify-content: flex-end;

        height: 80px;
        border-bottom: 2px solid transparent;
    
        &:hover {
            /* border-bottom: 2px solid #4b59f7; */
        }
    
        @media screen and (max-width: 960px){
            width: 100%;
            flex: 0;
            display:block ;

            
            &:hover {
                border: none;
            }
        }
`;
const MenuItem = styled.div`
        font-weight: bold;
        cursor: pointer;
        text-transform: capitalize;
        &:hover{color: grey; }

        color:#102A42;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0.5rem 1rem;
        height: 100%;
        font-weight: bold;
    
        @media screen and (max-width :960px){
            text-align: center;
            padding: 2rem;
            width: 100%;
            display: table;
            &:hover{
                color: grey;
                transition: all 0.3s ease;
            }
    
        }
`
const LowerNavMenu = styled.ul`
        display:flex;
        align-items: center;
        list-style: none;
        text-align: center;
    `;
const LowerNavLinks = styled.div`
        list-style: none;
        text-align: center;
        height: 80px;
        border-bottom: 2px solid transparent;
        color:#ff7600;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0.5rem 1rem;
        height: 100%;
        font-weight: bold;
        &:hover{ color: grey; }

`;

const NavItemBtn = styled.li`
        @media screen and (max-width: 960px){
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 120px;
        }
    `;

const NavBtnLink = styled.div`
        display:flex;
        justify-content: center;
        align-items:center;
        text-decoration: none;
        padding: 8px 16px;
        height: 100%;
        width: 100%;
        border: none;
        outline:none;
    `;

const Nav2 = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
    const displaySubmenu = (e) => {
        const page = e.target.textContent
        const tempBtn = e.target.getBoundingClientRect()
        const center = (tempBtn.left + tempBtn.right) / 2
        const bottom = tempBtn.botton - 3
        openSubmenu(page, { center, bottom })
    }

    const handleSubmenu = (e) => {
        if (!e.target.classList.contains('menu')) {
            closeSubmenu()
        }
    }

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav>
                    <NavbarConatiner>
                        <NavLogo to="/">stripe</NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>

                        <NavMenu onClick={handleClick} click={click}>
                            <Right onMouseOver={handleSubmenu} onClick={openSidebar}>
                                <MenuItem className='menu' onMouseOver={displaySubmenu}>products</MenuItem>
                                <MenuItem className='menu' onMouseOver={displaySubmenu}>solutions</MenuItem>
                                <MenuItem className='menu' onMouseOver={displaySubmenu}>developers</MenuItem>
                                <MenuItem className='menu' onMouseOver={displaySubmenu}>resources</MenuItem>
                                <MenuItem >pricing</MenuItem>
                            </Right>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/sign-in">
                                        <Button primary>Sign In</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to="/sign-in">
                                        <Button fontBig primary>
                                            Sign In
                                        </Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>

                        </NavMenu>

                    </NavbarConatiner>
                </Nav>
                <Nav>
                    <NavbarConatiner>
                        <NavLogo to="/" style={{ color: "#ff7600", fontSize: "20px" }}>
                            <NavIcon style={{ color: "#ff7600" }} /> Altas
                        </NavLogo>
                        <LowerNavMenu>
                            <LowerNavLinks to='/Overview' style={{ color: "#102A42" }}>Overview</LowerNavLinks>
                            <LowerNavLinks to='/Guides' >Guides</LowerNavLinks>
                            <LowerNavLinks to='/Docs'>Docs</LowerNavLinks>
                        </LowerNavMenu>
                    </NavbarConatiner>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Nav2