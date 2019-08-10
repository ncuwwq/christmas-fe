import styled from 'styled-components';

export const LoginWrapper = styled.div  `
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;


export const LoginBox = styled.div`
    height: 10rem;
    width:  100%;
    text-align: center;
    left: 50%;
    top: 50%;
    position: fixed;
    transform: translate(-50%, -50%);
`;


export const Input = styled.input`
    height: 3rem;
    width: 65%;
    margin: 0 auto;
    background-color: transparent;
    border-bottom: 1px solid #fff;
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    padding-left: 3rem;
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 20px;
    line-height: 0;
    outline: none;
    font-family: Microsoft YaHei;
    ::-webkit-input-placeholder {
        font-size: 1.15rem;
        color:#ffffff;
    }
    ::-moz-placeholder {
        font-size: 1.15rem;
        color:#ffffff;
    }
    ::-moz-placeholder {
        font-size: 1.15rem;
        color:#ffffff;
    }
    ::-ms-input-placeholder {
        font-size: 1.15rem;
        color:#ffffff;
    }
`;

export const LoginButton = styled.button`
    width: 75%;
    height: 3.5rem;
    border: 0;
    border-radius: 3px;
    background: rgba(255,255,255,0.58);
    outline: none;
    color: white;
    font-size: 1.2rem;
    margin: 0.5rem 0 0 0;
    text-align: center;
`;

export const WriteWish = styled.textarea`
    outline: none;
    height: 7.375rem;
    width: 18.8125rem;
    margin: 1.875rem auto 0 auto;
    border-radius: 0.625rem;
    border: 0;
    color: #333333;
    font-size: 1.2625rem;
    font-family: PingFang-SC-Medium;
    padding: 1rem 0.5rem 1rem 1rem;
    ::-webkit-input-placeholder {
        color: rgb(150,157,163);
        font-weight: lighter;
        font-family: PingFang-SC-Medium;
      }
`;


export const WishButton = styled.div`
    width: 6.875rem;
    height: 3.15rem;
    margin: 2.75rem auto 0 auto;
    border: none;
    border-radius: 0.5rem;
    color: rgb(255,255,255);
    font-size: 1.125rem;
    font-family: PingFang-SC-Bold;
    line-height: 3.15rem;
    text-align: center;
    background-repeat:no-repeat; 
    background-size:100% 100%;
`;

export const WishTop = styled.div`
    height: 15.15625rem;
    width: 14.3125rem;
    background-repeat:no-repeat; 
    background-size:100% 100%;
    margin: auto;
`;