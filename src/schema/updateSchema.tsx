import * as Yup from 'yup';

export const updateSchema = Yup.object({
    rank: Yup.number().required('Required | Should be number').min(0, "Required"),
    percentile: Yup.number().required("Required | percentile 0 - 100").min(0, "Required | percentile 0 - 100").max(100, "Required | percentile 0 - 100"),
    score: Yup.number().required("Required | score 0 - 15").min(0, "Required | score 0 - 15").max(15, "Required | score 0 - 15"),
})
