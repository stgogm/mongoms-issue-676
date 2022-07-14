export default async () => {
  const replSet = global.MONGODB_REPL_SET;

  if (replSet) {
    console.log("stopping mongo memory server");
    await replSet.stop();
    console.log("mongo memory server stopped");
  }
};
