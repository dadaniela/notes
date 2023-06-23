import { api } from "../../../../server/src/services/api";
import { useParams, useNavigate } from "react-router-dom";
import { ButtonText } from "../../components/ButtonText";
import { Container, Links, Content } from "./styles";
import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { useState, useEffect } from "react";
import { Tag } from "../../components/Tag";

export function Details(){
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  function handleBack(){
    navigate("/"); 
  }
  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, []);
  return(
    <Container>
      <Header/>
      {
        data &&
        <main>
          <Content>
            <ButtonText title="delete note"/>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
              {
                data.links &&
                <Section title="Links">
                  <Links>
                    {
                      data.links.map(link => (
                        <li key={String(link.id)}>
                          <a href={link.url} target="_blank">{link.url}</a>
                        </li>
                      ))
                    }
                  </Links>
                </Section>
              }
              {
                data.tags &&
                <Section title="Tags">
                  {
                    data.tags.map(tag => (
                      <Tag
                        key={String(tag.id)}
                        title={tag.name}
                      />
                    ))
                  }
                </Section>
              }
            <Button label="Back" onClick={handleBack}/>
          </Content>
        </main>
      }
    </Container>
  );
}