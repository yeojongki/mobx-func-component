import Taro, { FC } from "@tarojs/taro";
import { Button, View } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";

type PageStateProps = {
  counterStore: {
    counter: number;
    increment: Function;
    decrement: Function;
    incrementAsync: Function;
  };
};

const Index: FC<PageStateProps> = props => {
  console.log(props);

  return (
    <View>
      {/* <View>{counter}</View> */}
      <Button plain>点击</Button>
    </View>
  );
};

export default inject("counterStore")(observer(Index));
