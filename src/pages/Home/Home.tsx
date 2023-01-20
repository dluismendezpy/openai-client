import { ReactElement } from "react";

import { ReloadOutlined } from "@ant-design/icons";
import { Button, Col, Form, Image, Input, Row, Space, Typography } from "antd";

import { Base } from "@/containers";
import { useGenerateImage } from "@/hooks";
import "./Home.scss";

const { Title } = Typography;
const { useForm } = Form;

const Home = (): ReactElement => {
	const [generateImage, imageUrl, loading, setImageUrl] = useGenerateImage();
	const [form] = useForm();

	const isImg = (): boolean => imageUrl.length > 0;

	const tryAgain = (): void => {
		setImageUrl("");
		form.setFieldsValue({ value: "" });
	};

	return (
		<Base className="home-container">
			<Row className="row" justify="space-between">
				<Col span={11} className="form">
					<Title className="title">DALL-E - AI Image Generator</Title>
					<Form
						name="form"
						layout="horizontal"
						onFinish={generateImage}
						form={form}
					>
						<Form.Item
							name="value"
							rules={[{ required: true, message: "Please enter input" }]}
						>
							<Input
								type="text"
								placeholder="Enter anything!"
								disabled={isImg()}
							/>
						</Form.Item>
						<Form.Item>
							<Space>
								<Button
									type="primary"
									htmlType="submit"
									loading={loading}
									disabled={isImg()}
								>
									Generate
								</Button>
								{isImg() && (
									<Button onClick={tryAgain}>
										<ReloadOutlined />
										Try again
									</Button>
								)}
							</Space>
						</Form.Item>
					</Form>
					<div className="footer">
						<a
							target="_blank"
							href="https://www.luismendezdev.com/"
							rel="noreferrer"
						>
							LuisMendezDev
						</a>
						<p>
							GH:&nbsp;
							<a
								target="_blank"
								href="https://github.com/dluismendezpy"
								rel="noreferrer"
							>
								dluismendezpy
							</a>
							&nbsp; IN:&nbsp;
							<a
								target="_blank"
								href="https://www.linkedin.com/in/luismendez-dev/"
								rel="noreferrer"
							>
								luismendez-dev
							</a>
							&nbsp; - Powered by:&nbsp;
							<a
								target="_blank"
								href="https://beta.openai.com/overview"
								rel="noreferrer"
							>
								OpenAI
							</a>
						</p>
					</div>
				</Col>
				<Col span={11} className="image">
					{isImg() && (
						<Image
							src={imageUrl || ""}
							alt={form.getFieldValue(["value"]) || "OpenAI image"}
							className="img"
						/>
					)}
				</Col>
			</Row>
		</Base>
	);
};

export { Home };
