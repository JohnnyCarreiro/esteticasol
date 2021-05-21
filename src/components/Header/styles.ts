import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.header)`
    width:100%;
    background-color:rgba(0,0,0,0.1);
    /* Chage bg color to deep purple */

    position:fixed;
    top:0;
    right:0;
    z-index:1000;
    display:flex;
    justify-content:center;
    align-items:center;
    .nav{
        flex:1;
    }
`;
