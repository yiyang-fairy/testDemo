import { Button } from "antd";
import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import { upload } from "../../api";

function Home() {
  const [data, setData] = useState([]);
  const columns = [
    {
      title: "文件名",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "文件大小(b)",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "文件类型",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "上传进度",
      key: "progress",
      dataIndex: "progress",
    },
    {
      title: "操作",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              uploadOne(record);
            }}
          >
            开始
          </a>
          <a>删除</a>
        </Space>
      ),
    },
  ];

  const uploadFile = (e) => {
    const files = e.target.files;
    for (const file of files) {
      console.log(file);
      setData((data) => [...data, file]);
    }
  };

  const dropEnter = function (e) {
    e.stopPropagation();
    e.preventDefault();
  };

  const dragOver = function (e) {
    e.stopPropagation();
    e.preventDefault();
  };

  const drop = function (e) {
    e.stopPropagation();
    e.preventDefault();
    const files = e.dataTransfer.items;
    for (const file of files) {
      const entry = file.webkitGetAsEntry();
      openDirectory(entry);
    }
  };

  const openDirectory = (directory) => {
    if (directory.isDirectory) {
      // TODO 树形结构
      directory.createReader().readEntries((entries) => {
        for (const entry of entries) {
          if (entry.isDirectory) {
            openDirectory(entry);
          } else {
            addData(entry);
          }
        }
      });
    } else {
      addData(directory);
    }
  };

  const addData = (entry) => {
    entry.file((f) => {
      setData((data) => [...data, f]);
    });
  };

  const startUpload = () => {
    data.forEach((item) => {
      uploadOne(item);
    });
  };
  const uploadOne = (file) => {
    upload(file);
  };

  return (
    <div className="p-5">
      <div
        onDrop={drop}
        onDragEnter={dropEnter}
        onDragOver={dragOver}
        className=" border border-gray-500 border-dashed rounded-3xl flex flex-col justify-center items-center  p-5 h-80"
      >
        <div>logo</div>
        <div>点击或者将文件拖拽到此处上传</div>
        <input type="file" onChange={uploadFile} multiple />
        {/* directory="true"
          webkitdirectory="true"
          mozdirectory="true"
          msdirectory="true"
          odirectory="true" */}
      </div>
      <div>
        <Button className="mt-5" type="primary" onClick={startUpload}>
          上传文件
        </Button>
      </div>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
}

export default Home;
