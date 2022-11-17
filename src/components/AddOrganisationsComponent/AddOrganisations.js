import {
  Form,
  Input,
  Upload,
  message,
  Select,
  Button,
  TreeSelect,
  Modal,
  Typography,
} from "antd";
import "./AddOrganisations.scss";
// import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  states,
  admins,
  domains,
} from "../../Constants/FormSectionsData/FormSectionsData";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";

export const AddOrganisations = ({ selectedCardData }) => {
  const { Text } = Typography;

  const [defaultValue, setDefaultValue] = useState({
    logo: "",
    orgName: "",
    phoneNumber: "",
    email: "",
    city: "",
    state: "",
    admin: "",
    orgDomain: "",
    address: "",
  });

  useEffect(() => {
    if (location.href === "http://localhost:3000/AddOrganisationsView") {
      setDefaultValue({
        logo: "",
        orgName: "",
        phoneNumber: "",
        email: "",
        city: "",
        state: "",
        admin: "",
        orgDomain: "",
        address: "",
      });
    } else {
      setDefaultValue(selectedCardData);
    }
  }, []);

  const uniqueId = uuid();
  const id = uniqueId.slice(0, 3);

  const stateOptions = [];
  for (let i = 0; i < states.length; i++) {
    stateOptions.push({ value: states[i] });
  }

  const adminOptions = [];
  for (let i = 0; i < admins.length; i++) {
    adminOptions.push({ value: admins[i] });
  }

  const domainOptions = [];
  for (let i = 0; i < domains.length; i++) {
    domainOptions.push({ value: domains[i] });
  }

  const { SHOW_PARENT } = TreeSelect;
  const treeData = [
    {
      title: "AIMS",
      value: "AIMS",
      key: "AIMS",
    },
    {
      title: "AP",
      value: "AP",
      key: "AP",
    },
    {
      title: "LMS",
      value: "LMS",
      key: "LMS",
    },
    {
      title: "HRMS",
      value: "HRMS",
      key: "HRMS",
    },
    {
      title: "EP",
      value: "EP",
      key: "EP",
    },
    {
      title: "CMS",
      value: "CMS",
      key: "CMS",
    },
    {
      title: "LXP",
      value: "LXP",
      key: "LXP",
    },
  ];

  const { Option } = Select;

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
        defaultValue="India"
      >
        <Option value="India">
          <img
            style={{ width: "100%" }}
            src="data:image/png;base64,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"
            alt="/"
          />
        </Option>
        <Option value="Australia">
          <img
            src="data:image/png;base64,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"
            alt="/"
            style={{ width: "100%" }}
          />
        </Option>
        <Option value="America">
          <img
            src="data:image/png;base64,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"
            alt="/"
            style={{ width: "100%" }}
          />
        </Option>
      </Select>
    </Form.Item>
  );

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const [state, setState] = useState({
    loading: false,
  });
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setState({
          imageUrl,
          loading: false,
        });
      });
    }
  };

  const { imageUrl } = state;

  // const uploadButton = (
  //   <div>
  //     {imageUrl ? <LoadingOutlined /> : <PlusOutlined />}
  //     <div
  //       style={{
  //         marginTop: 8,
  //       }}
  //     >
  //       Upload
  //     </div>
  //   </div>
  // );

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const saveDataToLocalStorage = (organization) => {
    if (location.href === "http://localhost:3000/AddOrganisationsView") {
      organization["id"] = id;

      let organizationData;

      let previousData = localStorage.getItem("organization");
      let parsedData = JSON.parse(previousData);

      if (parsedData === null) {
        organizationData = [];
      } else {
        organizationData = parsedData;
      }

      organization.logo = imageUrl;

      const dataObject = {
        id: organization.id,
        logo: organization.logo,
        orgName: organization.orgName,
        service: organization.service,
        email: organization.email,
        address: organization.address,
        state: organization.state,
        phoneNumber: organization.phoneNumber,
        city: organization.city,
        admin: organization.admin,
        orgDomain: organization.orgDomain,
      };
      organizationData.push(dataObject);

      localStorage.setItem("organization", JSON.stringify(organizationData));
      window.location.href = "/Organisations";
    } else {
      let previousData = localStorage.getItem("organization");
      let parsedData = JSON.parse(previousData);
      console.log(parsedData);

      let index = parsedData.findIndex(
        (each) => each.id === selectedCardData.id
      );
      console.log("index", index);

      let id = organization["id"];

      id = selectedCardData.id;

      parsedData[index] = organization;
      parsedData[index].id = id;

      localStorage.setItem("organization", JSON.stringify(parsedData));

      window.location.href = "/Organisations";
    }
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const [multiSelectValue, setMultiSelectValue] = useState([]);
  const onChange = (newMultiSelectValue) => {
    setMultiSelectValue(newMultiSelectValue);
  };

  const tProps = {
    treeData,
    multiSelectValue,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: "Please select",
    style: {
      width: "100%",
    },
  };

  const [isResetPassword, setIsResetPassword] = useState(false);

  const showModal = () => {
    setIsResetPassword(true);
  };

  const countDown = () => {
    const modal = Modal.success({
      title: "Password Changed",
      content: `New Password has been sent to ${selectedCardData.email}`,
    });

    setTimeout(() => {
      setIsResetPassword(false);
    }, 100);

    setTimeout(() => {
      modal.destroy();
    }, 1000);
  };

  const [disablebutton, isDisablebutton] = useState(false);

  const history = useHistory();

  const previousPage = () => {
    history.goBack();
  };

  return (
    <div className="Add-organisations-container">
      <Text>
        {location.href === "http://localhost:3000/AddOrganisationsView"
          ? "Add Organisation"
          : "Edit Organisation"}
      </Text>
      <div className="add-organisation-container">
        <Form
          autoComplete="on"
          className="add-organisation-form"
          layout="vertical"
          key={defaultValue.id}
          // getValueFromEvent={normFile}
          onFinish={(values) => {
            saveDataToLocalStorage(values);
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
        >
          <div className="add-organisation-form-image-container">
            <Form.Item
              valuePropName="fileList"
              name="logo"
              getValueFromEvent={normFile}
            >
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" className="form-image" />
                ) : (
                  <img src={defaultValue.logo} alt="+" className="form-image" />
                )}
                {/* {selectedCardData? (
                  <img
                  src= {selectedCardData.logo}
                  alt = 'logo'
                  className = 'form-image'
                  />
                ) : (
                  uploadButton
                )} */}
              </Upload>
            </Form.Item>
            {location.href ===
            "http://localhost:3000/AddOrganisationsView" ? null : (
              <Form.Item style={{ width: "100%" }}>
                <Button className="reset-button" onClick={showModal}>
                  Reset Password
                </Button>
                <Modal
                  open={isResetPassword}
                  // onCancel={countDown}
                  closable={false}
                  footer={null}
                >
                  <div className="reset-password-container">
                    <Text className="reset-password-title">
                      {" "}
                      Reset Password
                    </Text>
                    <Form>
                      <Form.Item
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: "Please enter new password!",
                          },
                        ]}
                        style={{ width: "100%" }}
                      >
                        <Input.Password
                          className="reset-password-input"
                          placeholder="New Password"
                        />
                      </Form.Item>
                      <Form.Item
                        name="confirm"
                        dependencies={["password"]}
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: "Please confirm your password!",
                          },
                          ({ getFieldValue }) => ({
                            validator(_, value) {
                              if (
                                !value ||
                                getFieldValue("password") === value
                              ) {
                                isDisablebutton(true);
                                return Promise.resolve();
                              }
                              return Promise.reject(
                                new Error(
                                  "The two passwords that you entered do not match!"
                                )
                              );
                            },
                          }),
                        ]}
                      >
                        <Input.Password
                          className="reset-password-input"
                          placeholder="Confirm Password"
                        />
                      </Form.Item>
                      <Form.Item>
                        <div className="reset-button-container">
                          <Button
                            type="primary"
                            disabled={!disablebutton}
                            onClick={countDown}
                          >
                            Reset
                          </Button>
                        </div>
                      </Form.Item>
                    </Form>
                  </div>
                </Modal>
              </Form.Item>
            )}
          </div>
          <div className="add-organisation-form-fillup-container">
            <Form.Item
              label="Organization Name :"
              name="orgName"
              rules={[
                {
                  required: true,
                  message: "Please enter organization name",
                  min: 3,
                },
              ]}
              hasFeedback
              className="form-item"
            >
              <Input
                placeholder="Type Organisation Name"
                className="input"
                allowClear={true}
                defaultValue={defaultValue.orgName}
              />
            </Form.Item>
            <Form.Item
              className="form-item1"
              label="Service :"
              name="service"
              rules={[{ required: true, message: "service is required" }]}
            >
              <TreeSelect {...tProps} defaultValue={defaultValue.service} />
            </Form.Item>
            <Form.Item
              label="Phone Number :"
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
              className="form-item"
            >
              <Input
                addonBefore={prefixSelector}
                placeholder="Please enter phone number"
                className="input"
                size="medium"
                // allowClear = {true}
                minLength={9}
                maxLength={10}
                defaultValue={defaultValue.phoneNumber}
              />
            </Form.Item>
            <Form.Item
              label="Email :"
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
              className="form-item1"
            >
              <Input
                placeholder="Please enter email"
                className="input"
                allowClear={true}
                defaultValue={defaultValue.email}
              />
            </Form.Item>
            <Form.Item
              label="City :"
              name="city"
              rules={[{ required: true, message: "Please enter city" }]}
              className="form-item"
            >
              <Input
                placeholder="Please enter city"
                className="input"
                allowClear={true}
                defaultValue={defaultValue.city}
              />
            </Form.Item>
            <Form.Item
              label="State :"
              name="state"
              rules={[{ required: true, message: "Please enter state" }]}
              className="form-item1"
            >
              <Select
                defaultValue={defaultValue.state}
                className="input"
                options={stateOptions}
              ></Select>
            </Form.Item>
            <Form.Item label="Admin :" name="admin" className="form-item">
              <Select
                defaultValue={defaultValue.admin}
                className="input"
                options={adminOptions}
              ></Select>
            </Form.Item>
            <Form.Item
              label="Domain :"
              name="orgDomain"
              rules={[{ required: true, message: "Please enter state" }]}
              className="form-item1"
            >
              <Select
                defaultValue={defaultValue.orgDomain}
                className="input"
                options={domainOptions}
              ></Select>
            </Form.Item>
            <Form.Item
              label="Address :"
              name={["address"]}
              rules={[{ required: true, message: "address is required" }]}
              className="form-item1"
            >
              <Input
                placeholder="Please enter address"
                className="input"
                allowClear={true}
                defaultValue={defaultValue.address}
              />
            </Form.Item>
            <div className="add-organisation-form-buttons">
              <Form.Item
                wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
                style={{ marginRight: "5%" }}
              >
                {/* <Link to="/Organisations"> */}
                <Button
                  htmlType="Cancel"
                  className="cancel-button"
                  onClick={previousPage}
                >
                  Cancel
                </Button>
                {/* </Link> */}
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="Save">
                  Save
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

AddOrganisations.propTypes = {
  selectedCardData: PropTypes.object,
};
