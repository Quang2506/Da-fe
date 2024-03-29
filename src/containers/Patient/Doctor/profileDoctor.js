import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import '../../../scss/Home/Patient/Doctor/DetailDoctor.scss'
import { getDetailDoctor } from '../../../store/actions';
import { Row,Col } from 'antd';

const ProFileDoctor= (props) => {
    const params = useParams()
    const { id } = params
    const [image, SetImage] = useState('')
    useEffect(() => {
        props.getDetailDoctor(id)

    }, [])
    useEffect(() => {

        if (props.dataDetailDoctor) {
            let imageDoctor = getImageDoctor()
            SetImage(imageDoctor)

        }


    }, [props.dataDetailDoctor])

    const getImageDoctor = () => {
        let imageBase64 = ''
        if (props.dataDetailDoctor) {

            imageBase64 = new Buffer(props.dataDetailDoctor.image, 'base64').toString('binary')
        }
        return imageBase64
    }
  

    return (
        <>
           
            
          
                <Row >
                    {
                        image ? (
                            <Col  >
                                <div className='img-detailDoctor' style={{ backgroundImage: `url('${image}')` }} > </div>
                            </Col>
                        )

                            : ''}



                    <Col offset={1} span={15}>
                        <h2>{props.dataDetailDoctor && props.dataDetailDoctor.positionId === 'P0' ? (<span>Bác sĩ ,{props.dataDetailDoctor.lastName
                        } {props.dataDetailDoctor.firstName}</span>) : ''}</h2>
                        <h2>{props.dataDetailDoctor && props.dataDetailDoctor.positionId === 'P1' ? (<span>Thạc sĩ,{props.dataDetailDoctor.lastName
                        } {props.dataDetailDoctor.firstName}</span>) : ''}</h2>
                        <h2>{props.dataDetailDoctor && props.dataDetailDoctor.positionId === 'P2' ? (<span>Tiến sĩ,{props.dataDetailDoctor.lastName
                        } {props.dataDetailDoctor.firstName}</span>) : ''}</h2>
                        <h2>{props.dataDetailDoctor && props.dataDetailDoctor.positionId === 'P3' ? (<span>Phó Giáo Sư,{props.dataDetailDoctor.lastName
                        } {props.dataDetailDoctor.firstName}</span>) : ''}</h2>
                        <h2>{props.dataDetailDoctor && props.dataDetailDoctor.positionId === 'P4' ? (<span>Giáo Sư,{props.dataDetailDoctor.lastName
                        } {props.dataDetailDoctor.firstName}</span>) : ''}</h2>
                        <p className='des-doctor'> {props.dataDetailDoctor ? props.dataDetailDoctor.Markdown.description : ''}</p>
                    </Col>



                </Row>





                
                

            
        </>
    )
}

const mapStateToProps = state => {

    return {
        dataDetailDoctor: state.admin.dataDetailDoctor

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getDetailDoctor: (id) => { dispatch(getDetailDoctor(id)) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProFileDoctor);