import { ReactElement } from "react"
import Input from "../input/input"
import Button from "../button/button"
import { Formik } from "formik"
import { updateSchema } from "@/schema/updateSchema"

export interface dataProps {
    rank: number,
    percentile: number,
    score: number,
}

export default function UpdateScores({ data, setData, setOpenModal, img }: { data: dataProps, setData: (data: dataProps) => void, setOpenModal: (aug0: boolean) => void, img: ReactElement }) {

    return (
        <div className="fixed top-0 left-0 bg-black/[0.5] w-full h-full flex items-center justify-center z-[100]">
            <div className="md:w-[600px] w-[90%] bg-white flex p-6 flex-col gap-8 rounded-lg">
                <div className="w-full flex justify-between gap-6">
                    <h1 className="font-bold text-[16px]">Update Scores</h1>
                    {img}
                </div>

                <Formik
                    initialValues={{ rank: data.rank, percentile: data.percentile, score: data.score}}
                    validationSchema={updateSchema}
                    validateOnChange={true}
                    validateOnBlur={true}
                    onSubmit={( values, { setSubmitting }) => {
                        setData(values)
                        setOpenModal(false)
                        setSubmitting(false);
                    }}
                    >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleSubmit,
                    }) => (

                        <form onSubmit={handleSubmit} className="flex flex-col gap-8 ">
                
                            {/* rank label and input field */}
                            <div className="w-full flex justify-between items-center gap-6">
                                <h1 className="flex items-center gap-4 font-bold w-[150%]">
                                    <span className="p-2 px-3 rounded-full bg-primary text-white">1</span>
                                    <span>Update your <b>Rank</b></span>
                                </h1>
                                <Input name="rank" value={values.rank} error={touched.rank ? errors.rank : ""} type="number" className="flex-1" onChange={handleChange} />
                            </div>

                            {/* percentile label and input field */}
                            <div className="w-full flex justify-between items-center gap-6">
                                <h1 className="flex items-center gap-4 font-bold w-[150%]">
                                    <span className="p-2 px-3 rounded-full bg-primary text-white">2</span>
                                    <span>Update your <b>Percentile</b></span>
                                </h1>
                                <Input name="percentile" value={values.percentile} error={touched.percentile ? errors.percentile : ""} type="number" max={100} className="flex-1" onChange={handleChange} />
                            </div>

                            {/* score label and input field */}
                            <div className="w-full flex justify-between items-center gap-6">
                                <h1 className="flex items-center gap-4 font-bold w-[150%]">
                                    <span className="p-2 px-3 rounded-full bg-primary text-white">3</span>
                                    <span>Update your <b>Current Score (out of 15)</b></span>
                                </h1>
                                <Input name="score" value={values.score} error={touched.score ? errors.score : ""} type="number" max={15} className="flex-1" onChange={handleChange} />
                            </div>

                            <div className="flex justify-end gap-6">
                                <Button variant="secondary" onClick={() => setOpenModal(false)}>Cancel</Button>
                                <Button type="submit" >Save</Button>
                            </div>

                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}