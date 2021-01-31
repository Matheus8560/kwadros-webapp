import styled from 'styled-components';
import HorizontalScroll from 'react-scroll-horizontal';
import ScrollMenu from 'react-horizontal-scrolling-menu';

const borderEffect = {
    active: '75%',
    default: '100%'
}

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
    flex-direction: column;
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
    /* cursor: pointer; */
    justify-content: center;
    width: 200px !important;
    height: 200px !important;
    position: relative !important;
    display: flex !important;
    align-items: center !important;

    @media(max-width: 700px) {
        width: 140px !important;
        height: 140px !important;
    } 
    @media(min-height: 900px) {
        width: 450px !important;
        height: 450px !important;
    }
`;

export const PreviewImg = styled.div`
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 183px !important;
    height: 183px !important;
    margin-left: -5px !important;
    margin-top: -13px !important;

    @media(max-width: 700px) {
        width: 123px!important;
        height: 123px !important;
    } 
    @media(min-height: 900px) {
        width: 433px!important;
        height: 433px !important;
    }
`;

export const Img = styled.img`
    width: ${props => borderEffect[ props.type || 'default' ]};
    height: ${props => borderEffect[ props.type || 'default' ]};
    object-fit: cover !important;
`;

export const Frame = styled.div`
    position: absolute;
    top: 0;
    width: 100% !important;
    
    @media(max-width: 700px) {
        width: 133px!important;
        height: 133px !important;
    } 
    
    @media(min-height: 900px) {
        width: 443px!important;
        height: 443px !important;
    }
`;

// export const Frame = styled.img`

// `:



// export const PreviewImg = styled.div`
//     width: 200px;
//     height: 200px !important;
//     border-radius: 5px;
//     background-image: url('${props => props.src}');
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: 50% 50%;
//     margin-right: 10px;
//     margin-top: 2px;
//     margin-bottom: 10px;
    
//     @media(max-width: 700px) {
//         width: 140px;
//         height: 140px !important;
//     } 
//     @media(min-height: 900px) {
//         width: 450px;
//         height: 450px !important;
//     }
// `;

// export const Frame = styled.div`
//     width: 215px;
//     height: 215px;
//     position: absolute;
//     left: -8px;
//     top: 2px;
//     padding-bottom: 5px;

//     @media(max-width: 700px) {
//         width: 150px;
//         height: 150px !important;
//     } 
//     @media(min-height: 900px) {
//         width: 465px;
//         height: 465px !important;
//     }
    
// `;