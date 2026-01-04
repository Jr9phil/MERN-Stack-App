import {Ratelimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config();

const RATELIMIT = process.env.RATELIMIT || 10;

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(RATELIMIT, "60 s"),
    analytics: true,
});

export default ratelimit;