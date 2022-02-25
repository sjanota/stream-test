import fromKafkaTopic from 'rxjs-kafka';
import { of, first } from 'rxjs';

const { message$$, pushMessage$$ } = fromKafkaTopic(
    {
        clientId: 'my-app',
        brokers: ['my-cluster-kafka-bootstrap.kafka:9092']
    },
    { topic: 'test-topic', fromBeginning: true },
    { groupId: 'test-group' }
);

of('Hello KafkaJS user!').subscribe(pushMessage$$);
message$$.pipe(first()).subscribe(console.log);

console.log("hi!")