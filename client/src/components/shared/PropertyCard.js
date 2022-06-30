import { Card, Icon, Image } from "semantic-ui-react"

const PropertyCard = ({id, price, beds, sq_ft, baths})=>{
    return (
        <Card>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMh8S2bR8jyYfK3dIKD3PZ0mjxXJlk5Gzeg&usqp=CAU"
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