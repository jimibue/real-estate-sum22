import { Card, Icon, Image } from "semantic-ui-react"

const PropertyCard = ({id, price, beds, sq_ft, baths, image})=>{
    return (
        <Card>
        <Image
          src={image}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{price}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="expand arrows alternate" />
            {sq_ft}
          </a>
          <a>
            <Icon name="bath" />
            {baths}
          </a>
          <a>
            <Icon name="bed" />
            {beds}
          </a>
        </Card.Content>
      </Card>
    )
}

export default PropertyCard