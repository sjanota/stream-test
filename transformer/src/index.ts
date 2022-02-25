import fromKafkaTopic from "rxjs-kafka";
import { interval, map } from "rxjs";

const { message$$ } = fromKafkaTopic(
  {
    clientId: "transformer",
    brokers: ["my-cluster-kafka-bootstrap.kafka:9092"],
  },
  { topic: "test-topic-1", fromBeginning: true },
  { groupId: "transformer" }
);

const { pushMessage$$ } = fromKafkaTopic(
  {
    clientId: "transformer",
    brokers: ["my-cluster-kafka-bootstrap.kafka:9092"],
  },
  { topic: "test-topic-2", fromBeginning: true },
  { groupId: "transformer" }
);

message$$.pipe(map(({ x }) => ({ x: x * 3 }))).subscribe(pushMessage$$);
