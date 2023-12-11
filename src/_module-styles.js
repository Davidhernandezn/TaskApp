import { css } from "lit";
export const generalStyles = css`

*{
  margin:0px;
  padding: 0px;
}

 .main-container {
      margin: 50px auto;
      width: 500px;
      border-radius: 10px;
      background-color: #0D6EFD;
      justify-content: center;
      max-height: 600px;
      padding: 20px;
    }

    .title {
      text-align: center;
      color: white;
    }

    .input-text{
        margin-top:10px;
        width: 98%;
        height: 40px;
        font-size: 20px;
        border-radius:6px;
    }

 .tareas{
  background-color: white;
  margin-top:10px;
  border-radius:10px;
 }   
        
    #task-container {
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
      border: none; 
        width: 100px;
        height: 30px;
        background-color: #DC3545;
        color: white;
        border-radius: 6px;
        cursor: pointer;
      }

      .btn-delete:hover{
        background-color: #68B9C7;
      }

      .btn-container{
        padding:8px;
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

.btn-edit{
  background-color: #0D6EFD;
  color: white;
  padding: 2px;
  border: none;
  font-size:14px;
  border-radius: 2px;
  margin-top:4px;
}

.btn-detele{
  background-color: #DC3545;
  color: white;
  padding: 2px;
  border: none;
  font-size:14px;
  border-radius: 2px;
  margin-top:4px;
}
`