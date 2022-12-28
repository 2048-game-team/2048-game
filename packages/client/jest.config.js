import dotenv from 'dotenv'

dotenv.config()

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  globals: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^root/(.*)$': '<rootDir>/$1',
    '^src/(.*)$': '<rootDir>/$1',
    '^entities/(.*)$': '<rootDir>/src/entities/$1',
    '\\.(css|less|png|jpg|svg|gif)$': 'identity-obj-proxy'
  },
}
