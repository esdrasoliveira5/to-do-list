import styled from 'styled-components';

export const FormBoxStyle = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
    display: flex;
    flex-direction: column;
    background-color: #219EBC;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    input {
      width: 100%;
      padding: 12px 20px;
      box-sizing: border-box;
      margin: 8px 0;
    }
`;

export const ToDoStyle = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  display: flex;
  width: 60%;
  flex-direction: column;
  background-color: #219EBC;
  border-radius: 10px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`;

export const ProfileStyle = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  background-color: #219EBC;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`;

export const ToDoFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #219EBC;
  border-radius: 10px;
  input[type=text] {
    width: 100%;
    padding: 12px 20px;
    box-sizing: border-box;
    margin: 8px 0;
  }
  textarea {
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    resize: none;
  }
  div {
    display: flex;
    flex-direction: row;
    background-color: #fef9ef;
  }
  input[type=date] {
    width: 100%;
    padding: 12px 20px;
    box-sizing: border-box;
    margin: 8px 0;
  }
  button {
    width: 100%;
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
  }
  button:hover {
    background-color: #059862;
    color: white;
  }
`;

export const TableStyle = styled.div`
  background-color: #fef9ef;
  border-radius: 10px;
  overflow: scroll;
  table {
    border-collapse: collapse;
    width: 100%;
    td, th {
      border: 1px solid #ddd;
      padding: 8px;
    }
    tr:hover {
      background-color: #8ECAE6;
    }
    th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #219EBC;
      color: white;
    }
    select {
      width: 100%;
      padding: 5px 5px;
      border: none;
      border-radius: 4px;
      background-color: #f1f1f1;
    }
  }
`;

export const UserDataStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #219EBC;
  padding: 10px;
  border-radius: 10px;
`;
