export const log = ({ message }: { message: any; }) => {
    console.log(`[${new Date().toISOString()}] ${message}`);
  };
  