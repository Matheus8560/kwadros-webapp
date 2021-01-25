import styled from 'styled-components';
import HorizontalScroll from 'react-scroll-horizontal';
import ScrollMenu from 'react-horizontal-scrolling-menu';

export const Container = styled(ScrollMenu).attrs({ className: "sei-la" })`
    margin-top: 20px;
    display: flex;
    width: 100% !important ;

    & .menu-wrapper .menu-wrapper--inner .menu-item-wrapper {
        margin-right: 15px !important;
    }

    /* overflow: hidden; */
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #444;
        height: 200px;
        padding: 5%;


        div {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-right: 15px !important;
            div {
                margin-right: 15px !important
            }
        }
    }
`;



export const FileInfo = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: 100%;
        
        strong {
            width: 100%;
        }
        span {
            font-size: 12px;
            color: #999;
            margin-top: 5px;
            text-align: left;
            width: 100%;
            button {
                border: 0;
                background: transparent;
                color: #e57878;
                margin-left: 5px;
                cursor: pointer;
            }
        }
        strong {
            text-align: left
        }
    }
`;

export const Preview = styled.div`
    width: 200px;
    height: 200px !important;
    border-radius: 5px;
    background-image: url('${props => props.src}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    margin-right: 10px;
`;
