import React from 'react';
import PopularGoods from "../regular_components/PopularGoods/PopularGoods";
import {useAttributes} from "../../customHooks";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";

const Test = () => {
    useAttributes()
    const {attributeProducts} = useTypedSelector(state => state)
    console.log(attributeProducts)

    return (
        <div style={{maxWidth: '1290px', margin: '0 auto'}}>
            <PopularGoods />

            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, asperiores culpa dolores enim eveniet excepturi iure laudantium minus modi odio placeat quidem reiciendis sapiente sunt, ullam ut veniam! Animi dicta distinctio ducimus esse facere magnam modi nihil pariatur praesentium reprehenderit sed, sit suscipit totam! Aperiam cum cumque iusto maiores obcaecati praesentium provident quae quis reprehenderit veniam! Amet, perspiciatis, unde. Accusantium ad alias aperiam beatae blanditiis consequatur culpa delectus dolor dolores doloribus eos est excepturi facilis iure nemo nobis nulla odio officiis omnis pariatur quaerat quisquam ratione repellendus rerum temporibus tenetur ullam, veritatis vitae voluptatem voluptates? Accusantium adipisci amet aspernatur assumenda atque consectetur cupiditate debitis delectus enim ex excepturi expedita illum in iure labore laborum maiores minus modi nam nemo nesciunt nisi omnis optio pariatur, provident quam quas quibusdam repellendus, temporibus voluptatibus! Accusamus aliquam animi autem dicta, ea eligendi excepturi harum hic in magnam necessitatibus nobis, nulla possimus quam quasi saepe ullam. Assumenda consectetur cum dicta doloremque dolorum et ex facere facilis fugiat harum, id quaerat quibusdam soluta veritatis, voluptatibus. Amet esse id officia recusandae voluptatem voluptatum. Autem cumque, doloribus eaque error fugiat illum magnam molestiae mollitia natus nesciunt possimus provident voluptatem voluptates! Amet animi aperiam architecto eos eveniet fugiat mollitia nemo obcaecati pariatur perspiciatis, porro praesentium provident similique, sunt tenetur. Deleniti dolor, dolorem eaque inventore non omnis placeat porro possimus quia similique. Ab accusantium culpa dolorum ducimus et facilis itaque necessitatibus nemo nesciunt optio perferendis, possimus quae quaerat qui temporibus velit voluptates! Autem consequuntur eius eos facere illo itaque perferendis praesentium tempora? A, ad hic ipsum quos tempore totam veniam! Beatae incidunt inventore laboriosam laborum nobis odit qui voluptas. Assumenda delectus deleniti distinctio dolorem doloremque eaque harum ipsam laboriosam laudantium neque odit, perferendis quibusdam, ratione! Adipisci, doloremque dolorum eligendi est fugiat impedit ipsum laudantium maxime molestiae neque nostrum omnis provident quos repudiandae saepe sed sunt tenetur veniam voluptas voluptatem. Ab assumenda atque consectetur corporis cumque eaque error hic modi, optio quam, repudiandae tempora vero voluptatem. Accusantium aliquid architecto debitis, dolore enim, ipsa iure neque nobis quaerat rem tempora temporibus veniam voluptatum! Beatae debitis deserunt dolorem facere ipsum maxime necessitatibus neque nesciunt perspiciatis possimus, quo recusandae repellat similique velit voluptatem? Corporis distinctio dolorem dolores ducimus hic ipsum magni neque nostrum odio omnis praesentium quas repellat repudiandae temporibus, totam, ut vitae. Ad consequuntur corporis cum cumque dolorem est magnam magni maiores non omnis quasi reprehenderit, veniam vitae. Ad adipisci aliquam animi aperiam autem consequatur cumque dolor dolore dolorem ducimus esse est fuga fugit hic impedit iste modi mollitia omnis perspiciatis possimus quam quas quasi qui quia rerum, suscipit tenetur velit veniam voluptate voluptatem! Alias aspernatur at atque consectetur cum cupiditate eaque esse eum facere illo illum omnis quaerat quisquam sint, sit voluptatibus?
            </div>
        </div>
    );
};

export default Test;