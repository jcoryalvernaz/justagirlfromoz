import React from "react"
import styled from "styled-components"
import { buildImageObj } from "../lib/helpers"
import { imageUrlFor } from "../lib/image-url"
import { ucfirst } from "../lib/string-utils"

const RoleListStyles = styled.div`
  margin: 2rem 0 3rem;
  border-top: 1px solid var(--color-gray);
  .list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .listItem {
    font-size: var(--font-small-size);
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    > div:last-child {
      flex: 1;
      margin-left: 0.75rem;
    }
  }
  .avatar {
    position: relative;
    width: 3em;
    height: 3em;
    background: #eee;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      vertical-align: top;
      object-fit: cover;
    }
  }
`

function RoleList({ items, title }) {
  return (
    <RoleListStyles>
      <h2>{title}</h2>
      <ul className="list">
        {items.map(item => (
          <li key={item._key} className="listItem">
            <div>
              <div className="avatar">
                {item.person && item.person.image && item.person.image.asset && (
                  <img
                    src={imageUrlFor(buildImageObj(item.person.image))
                      .width(100)
                      .height(100)
                      .fit("crop")
                      .url()}
                    alt={item.person.name}
                  />
                )}
              </div>
            </div>
            <div>
              <div>
                <strong>{(item.person && item.person.name) || <em>Missing name</em>}</strong>
              </div>
              {item.roles && (
                <div>
                  {item.roles.map((role, idx) => {
                    switch (true) {
                      case idx === 0:
                        return <span key={role}>{ucfirst(role)}</span>
                      case idx === item.roles.length - 1:
                        return <span key={role}> & {role}</span>
                      default:
                        return <span key={role}>, {role}</span>
                    }
                  })}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </RoleListStyles>
  )
}

export default RoleList
