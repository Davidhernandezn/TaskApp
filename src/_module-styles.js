import { css } from "lit";

export const generalStyles = css`

/* Definición de variables CSS */
:root {
  --color-primary: #0D6EFD;
  --color-secondary: #2ecc71;
  --font-family: 'Arial', sans-serif;
  --font-size-medium: 16px;
}


*{
  margin:0px;
  padding: 0px;
}



 .main-container {
      margin: 50px auto;
      width: 500px;
      border-radius: 10px;
      background-color: #EAFCFF;
      justify-content: center;
      max-height: 600px;
      overflow: scroll;
    }

    .title {
      text-align: center;
      color: #68B9C7;
    }

    .input-text{
        width: 90%;
        height: 50px;
        font-size: 20px;
    }
    .task-container {
      justify-content: start;
      display: flex;
      align-items: center;

    }
    .item{
    margin-left: 20px;
    cursor: pointer;
    width: 25px;
    height: 25px;
    text-align: start;
    }
      
      .btn-delete{
        width: 200px;
        height: 35px;
        font-family: 'Courier New', Courier, monospace;
        background-color: #E6F7FF;
        border-radius: 10px;
        cursor: pointer;

      }
      .btn-delete:hover{
        background-color: #68B9C7;
      }
      .btn-delete:active{
        box-shadow: 0 2px #666;
        transform: translateY(4px);
      }
      .btn-container{
        padding:20px;
        text-align: right;
      }

      .label{
        transition: background-color 1s ease;
        font-size: 20px;
        width: 100%;
      }
      .item, .label{
        vertical-align: middle;
      }


.header{
  background-color: #0D6EFD;
  color: white;
  text-align: center;
  padding: 10px;
  width: 100%;
}
`