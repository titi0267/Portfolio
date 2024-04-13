import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite, CgYoutube } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ display: "flex", flex: "2" }}>
      <div style={{ flex: "1", display: "flex" }}>
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={{ objectFit: "cover", alignSelf: "center" }}
        />
      </div>
      <Card.Body
        style={{
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
          flex: "1",
        }}
      >
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignSelf: "center",
            columnGap: "10px",
          }}
        >
          {props.ghLink ? (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub />
              &nbsp;
              {"Github"}
            </Button>
          ) : (
            <></>
          )}
          {"\n"}
          {props.playstoreLink ? (
            <Button
              variant="primary"
              href={props.playstoreLink}
              target="_blank"
            >
              {"Playstore"}
            </Button>
          ) : (
            <></>
          )}
          {"\n"}

          {props.websiteLink ? (
            <Button variant="primary" href={props.websiteLink} target="_blank">
              <CgWebsite />
              &nbsp;
              {"Website"}
            </Button>
          ) : (
            <></>
          )}
          {"\n"}

          {props.demoLink ? (
            <Button variant="primary" href={props.demoLink} target="_blank">
              <CgYoutube />
              &nbsp;
              {"Demo"}
            </Button>
          ) : (
            <></>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
