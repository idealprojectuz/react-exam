import React from 'react'
import { Drawer, IconButton, Badge } from '@mui/material'
import { Stack } from '@mui/system';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import shopicon from '../../assets/icon/shop.svg'
import closeicon from '../../assets/icon/close.svg'
import './modal.scss'
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 0,
        top: '10%',
        width: '20px',
        height: '20px',
        position: 'absolute'
        // padding: '0 4px',
    },
}));
export const Cardmodal = () => {
    const [state, setState] = React.useState(false);
    const count = useSelector((state) => state.card.totalcount)
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };
    return (
        <React.Fragment>
            <IconButton onClick={toggleDrawer(true)}>
                <StyledBadge badgeContent={count ? count : ''} color="primary">
                    <img src={shopicon} alt="shop" />
                </StyledBadge>
            </IconButton>
            <Drawer
                anchor='right'
                open={state}
                onClose={toggleDrawer(false)}
            >
                <Stack width={'400px'}>
                    <div className="modal-container">
                        <div className='modal-header'>
                            <div className="modal-title">
                                <h3>Card</h3>
                            </div>
                            <div className='modal-close'>
                                <img src={closeicon} alt="close" />
                            </div>
                        </div>

                    </div>
                </Stack>
            </Drawer>
        </React.Fragment>
    )
}
