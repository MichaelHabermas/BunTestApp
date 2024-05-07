# starterrnapp

To install dependencies:

## Running the App

`git clean -fXq; bun i; bun start`

Open android studio, or use your phone to scan the generated QR code.

## Pushing to EAS

1. Update version in package.json
2. Update version in app.json
3. Increment android.versionCode in app.json
4. Run `npx expo install --check`
5. Run `npx expo-doctor@latest`
6. Run `git clean -fXq; bun ci; tsc --noEmit`
7. Save and push changes to GitHub
8. Run `bun run autoSubmit`

alt: `npx expo install --check; npx expo-doctor@latest; git clean -fXq; bun ci`

alt2: `npx expo install --check; npx expo-doctor@latest; git clean -fXq; bun ci; tsc --noEmit; npx expo start`

## Google Play Store Process

1. In Internal Testing, create a new release, and publish
2. In Pre-launch report overview, wait for possible errors and address

## Debugging

- Open the developer menu:
- If you’re using a physical device, shake it.
- If you’re using an iOS simulator, press `Cmd-Ctrl-Z` in macOS.
- If you’re using an Android emulator, press `Cmd-M` in macOS or `Ctrl-M` in Windows.

## Unsorted

- Create a development build locally, rather than remotely on EAS:
  - `npx expo run:[android|ios]` or
  - `eas build --local`
- Create and install the development build on
  - an Android Emulator or device `eas build --profile development --platform android`
  - an iOS Simulator `eas build --profile development-simulator --platform ios`
  - an iOS device:
    - eas device:create
    - `eas build --profile development --platform ios`
- Publish an update: `eas update --branch [branch-name] --message "[message]"`
