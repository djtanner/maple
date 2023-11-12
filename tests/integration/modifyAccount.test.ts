import { acceptOrganizationRequest } from "components/api/upgrade-org"
import { modifyAccount } from "components/moderation"
import { UserRecord } from "firebase-admin/auth"
import { signOut } from "firebase/auth"
import { auth } from "../../components/firebase"
import { testAuth } from "../testUtils"
import { waitFor } from "@testing-library/react"

import {
  createUser,
  expectCurrentUser,
  expectCurrentUserAdmin,
  expectPermissionDenied,
  expectUser,
  genUserInfo,
  getProfile,
  setNewProfile,
  signInTestAdmin,
  signInUser1,
  testCreatePendingOrgWithEmailAndPassword
} from "./common"

// afterAll(terminateFirebase)

describe("admins can modify user role", () => {
  it("lets admin make user an org", async () => {
    let user: UserRecord = await createUser()
    const admin = await signInTestAdmin()

    expect((await admin.getIdTokenResult()).claims.role).toEqual("admin")

    await modifyAccount({ uid: user.uid, role: "organization" })

    await expectUser(user, "organization", true)
  })

  it("lets admin make user an admin", async () => {
    let user: UserRecord = await createUser("user")
    await signInTestAdmin()
    await modifyAccount({ uid: user.uid, role: "admin" })

    await expectUser(user, "admin", true)
  })
  it("allows admins to update accounts", async () => {
    await signOut(auth)
    const newUser = genUserInfo()

    const creds = await testCreatePendingOrgWithEmailAndPassword(auth, newUser)

    // Verify that the user is a pendingUpgrade
    expect((await creds.user.getIdTokenResult(true)).claims).toMatchObject({
      role: "pendingUpgrade"
    })

    // Sign in as an admin
    await signInTestAdmin()
    await expectCurrentUserAdmin()

    await modifyAccount({ uid: creds.user.uid, role: "organization" })

    // Verify that the user is an org
    expect((await creds.user.getIdTokenResult(true)).claims["role"]).toEqual(
      "organization"
    )
    await signOut(auth)
    expectCurrentUser()
  })

  it("non-admins are unauthorized", async () => {
    const user = genUserInfo()
    // Create a pendingupgrade user
    const creds = await testCreatePendingOrgWithEmailAndPassword(auth, user)
    // Sign in as a normal user
    await signInUser1()
    // Verify that calling modifyAccount throws unauthorized error
    await expectPermissionDenied(
      modifyAccount({ role: "organization", uid: creds.user.uid })
    )
  })
})
